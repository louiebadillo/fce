import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Tracking utility functions
export const trackPageView = (pageName, pagePath) => {
  // Google Tag Manager - Page View
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_name: pageName,
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title
    });
  }

  // Meta Pixel - Page View
  if (window.fbq) {
    window.fbq('track', 'PageView', {
      content_name: pageName,
      content_category: 'page_view'
    });
  }
};

export const trackEvent = (eventName, eventData = {}) => {
  // Google Tag Manager - Custom Event
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }

  // Meta Pixel - Custom Event
  if (window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};

// Common tracking events for your healthcare website
export const trackContactForm = (formType = 'contact') => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    page_location: window.location.href
  });
};

export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    service_name: serviceName,
    page_location: window.location.href
  });
};

export const trackJobApplication = (jobTitle) => {
  trackEvent('job_application_start', {
    job_title: jobTitle,
    page_location: window.location.href
  });
};

export const trackPhoneClick = (phoneNumber) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    page_location: window.location.href
  });
};

export const trackEmailClick = (emailAddress) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    page_location: window.location.href
  });
};

// Component for automatic page view tracking
const Tracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Get page name from path
    const getPageName = (pathname) => {
      if (pathname === '/') return 'Home';
      if (pathname === '/about') return 'About';
      if (pathname === '/services') return 'Services';
      if (pathname === '/contact') return 'Contact';
      if (pathname === '/careers') return 'Careers';
      if (pathname.startsWith('/services/')) {
        const serviceName = pathname.split('/')[2];
        return `Service - ${serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
      }
      if (pathname.startsWith('/resources/')) {
        const resourceName = pathname.split('/')[2];
        return `Resource - ${resourceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
      }
      if (pathname.startsWith('/careers/apply/')) {
        return 'Job Application';
      }
      return pathname.replace(/\//g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown';
    };

    const pageName = getPageName(location.pathname);
    trackPageView(pageName, location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
};

export default Tracking;
