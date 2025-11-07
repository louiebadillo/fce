import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Dynamically updates meta tags for each page
 * Usage: <SEO title="Page Title" description="Page description" />
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image,
  type = 'website',
  noindex = false 
}) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default values
  const defaultTitle = 'Bonne Haven - Home Care Services in Calgary | Personalized Care Solutions';
  const defaultDescription = 'Bonne Haven provides compassionate, personalized home care services in Calgary. Specializing in senior care, special needs support, companionship, personal care, and more.';
  const defaultKeywords = 'home care Calgary, senior care, personal care services, companionship care, special needs support, dementia care, respite care, palliative care, home health care Calgary';
  // Use production path for Open Graph image (hero image with transparent background)
  // Using /og-image.png from public folder for stable URL (no hashing)
  const defaultImage = `${baseUrl}/og-image.png`;
  
  const pageTitle = title ? `${title} | Bonne Haven` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageImage = image || defaultImage;
  
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Update or create property tags (for Open Graph)
    const updatePropertyTag = (property, content) => {
      updateMetaTag(property, content, 'property');
    };
    
    // Primary Meta Tags
    updateMetaTag('title', pageTitle);
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', pageKeywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph Tags
    updatePropertyTag('og:title', pageTitle);
    updatePropertyTag('og:description', pageDescription);
    updatePropertyTag('og:image', pageImage);
    updatePropertyTag('og:url', currentUrl);
    updatePropertyTag('og:type', type);
    
    // Twitter Card Tags
    updatePropertyTag('twitter:title', pageTitle);
    updatePropertyTag('twitter:description', pageDescription);
    updatePropertyTag('twitter:image', pageImage);
    updatePropertyTag('twitter:url', currentUrl);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
    
  }, [pageTitle, pageDescription, pageKeywords, pageImage, currentUrl, type, noindex]);
  
  return null; // This component doesn't render anything
};

export default SEO;

