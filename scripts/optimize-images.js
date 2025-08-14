import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    progressive: true,
    compressionLevel: 9
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

// Get all image files
function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });
}

// Optimize a single image
async function optimizeImage(inputPath, outputPath, format = 'jpeg') {
  try {
    const image = sharp(inputPath);
    
    // Resize if too large (max 1920px width/height)
    image.resize(1920, 1920, {
      fit: 'inside',
      withoutEnlargement: true
    });

    // Apply format-specific optimizations
    if (format === 'jpeg' || format === 'jpg') {
      await image
        .jpeg(optimizationSettings.jpeg)
        .toFile(outputPath);
    } else if (format === 'png') {
      await image
        .png(optimizationSettings.png)
        .toFile(outputPath);
    } else if (format === 'webp') {
      await image
        .webp(optimizationSettings.webp)
        .toFile(outputPath);
    }

    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);

    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Main optimization function
async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  const imageFiles = getImageFiles(ASSETS_DIR);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(ASSETS_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const nameWithoutExt = path.basename(file, ext);
    
    // Skip if already optimized
    if (file.includes('optimized')) continue;

    // Determine output format
    let outputFormat = 'jpeg';
    if (ext === '.png') {
      outputFormat = 'png';
    }

    // Create optimized version
    const outputPath = path.join(OUTPUT_DIR, `${nameWithoutExt}-optimized${ext}`);
    const result = await optimizeImage(inputPath, outputPath, outputFormat);

    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
  }

  console.log('\n📊 Optimization Summary:');
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`\nOptimized images saved to: ${OUTPUT_DIR}`);
}

// Run optimization
optimizeImages().catch(console.error); 