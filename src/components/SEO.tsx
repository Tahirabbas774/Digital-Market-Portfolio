import { useEffect } from 'react';
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords = "Full Stack Digital Marketer, Performance Marketer, Media Buyer, Creative Strategist, Digital Branding, Lead Generation Specialist, Marketing Analyst, Business Consultant, AI Agent Automation, Digital Marketing Expert, Social Media Marketing, Facebook Ads Specialist, Google Ads Specialist, E-Commerce Marketing, Muhammad Tahir Abbas",
  ogImage = "https://tahir-portfolio.netlify.app/og-image.jpg",
  ogType = "website",
  canonical,
  author = "Muhammad Tahir Abbas",
  schema
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update favicon
    const updateFavicon = () => {
      let linkElement = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (linkElement) {
        linkElement.href = profileImage;
      } else {
        linkElement = document.createElement('link');
        linkElement.rel = 'icon';
        linkElement.type = 'image/png';
        linkElement.href = profileImage;
        document.head.appendChild(linkElement);
      }

      // Also update apple-touch-icon for iOS
      let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (appleTouchIcon) {
        appleTouchIcon.href = profileImage;
      } else {
        appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        appleTouchIcon.href = profileImage;
        document.head.appendChild(appleTouchIcon);
      }
    };

    updateFavicon();

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Muhammad Tahir Abbas - Digital Marketing Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    if (canonical) {
      updateMetaTag('og:url', canonical, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:creator', '@tahirabbas');

    // Additional SEO tags
    updateMetaTag('application-name', 'TAHIR - Digital Marketing Portfolio');
    updateMetaTag('apple-mobile-web-app-title', 'Muhammad Tahir Abbas Portfolio');
    updateMetaTag('format-detection', 'telephone=no');

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (linkElement) {
        linkElement.href = canonical;
      } else {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        linkElement.href = canonical;
        document.head.appendChild(linkElement);
      }
    }

    // Structured data (JSON-LD)
    if (schema) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (scriptElement) {
        scriptElement.textContent = JSON.stringify(schema);
      } else {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptElement);
      }
    }
  }, [title, description, keywords, ogImage, ogType, canonical, author, schema]);

  return null;
}

// Pre-defined schemas for different page types
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Tahir Abbas",
  "jobTitle": "Full Stack Digital Marketer & Performance Marketer",
  "description": "Results-driven Full Stack Digital Marketer specializing in Performance Marketing, Media Buying, Creative Strategy, Digital Branding, Lead Generation, AI Agent Automation, and E-Commerce Marketing",
  "url": "https://tahir-portfolio.netlify.app",
  "email": "bsf2002013@ue.edu.pk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "British Columbia",
    "addressCountry": "Canada"
  },
  "sameAs": [
    "https://www.linkedin.com/in/muhammad-tahir-abbas-05443a221"
  ],
  "knowsAbout": [
    "Digital Marketing",
    "Performance Marketing",
    "Media Buying",
    "Creative Strategy",
    "Social Media Marketing",
    "Facebook Ads",
    "Google Ads",
    "E-Commerce Marketing",
    "Lead Generation",
    "Marketing Analytics",
    "AI Agent Automation",
    "Business Consulting",
    "Brand Development",
    "Content Creation",
    "Website Development",
    "B2B Marketing",
    "SEO"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Bahauddin Zakariya University",
      "description": "Banking & Finance"
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of Education, Lahore",
      "description": "Bachelor of Science in Chemistry"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Google Ads Expert Certification",
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google pour les pros"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Professional Diploma in Digital Marketing",
      "credentialCategory": "diploma",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Institute of Digital Marketing"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Digital Marketing Certification",
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Digiskills"
      }
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "TAHIR - Muhammad Tahir Abbas Digital Marketing Services",
  "description": "Professional digital marketing services specializing in performance marketing, media buying, creative strategy, social media management, lead generation, and e-commerce optimization",
  "founder": {
    "@type": "Person",
    "name": "Muhammad Tahir Abbas"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "serviceType": [
    "Digital Marketing Strategy",
    "Performance Marketing",
    "Media Buying",
    "Social Media Marketing",
    "Facebook Ads Management",
    "Google Ads Management",
    "E-Commerce Marketing",
    "Lead Generation",
    "Marketing Analytics",
    "Creative Strategy",
    "Brand Development",
    "Content Creation",
    "SEO Services",
    "Website Development",
    "Business Consulting"
  ]
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Muhammad Tahir Abbas - Digital Marketing Portfolio",
  "description": "Professional portfolio showcasing expertise in full stack digital marketing, performance marketing, successful campaigns, and proven results across multiple industries",
  "author": {
    "@type": "Person",
    "name": "Muhammad Tahir Abbas",
    "jobTitle": "Full Stack Digital Marketer & Performance Marketer"
  },
  "about": [
    "Digital Marketing",
    "Performance Marketing",
    "Media Buying",
    "Social Media Marketing",
    "E-Commerce Marketing",
    "Lead Generation"
  ]
};