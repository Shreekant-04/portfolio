// utils/gtag.ts

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Load gtag script (only runs in browser)
 */
export const initGtag = (measurementId: string): void => {
  if (typeof window === 'undefined' || window.gtag) return;

  // Add gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', '${measurementId}');
    `;

  const script3 = document.createElement('script');
  script3.type = 'application/ld+json';
  script3.innerHTML = `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shreekant",
    "url": "https://shreekant.dev",
    "image": "https://shreekant.dev/profile.jpg",
  "sameAs": [
    "https://github.com/Shreekant-04",
    "https://www.linkedin.com/in/shreekantkumar",
    "https://www.instagram.com/shree_4.6",
    "https://x.com/Shreekant_4",
    "https://medium.com/@shreekant04",
    "https://rapidapi.com/shreekant74sk/api/quotes-api12",
  ]
  }
  `;

  document.head.appendChild(script3);
  document.head.appendChild(script);
  document.head.appendChild(script2);
};

/**
 * Send page view
 */
export const pageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};

interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

/**
 * Send custom event
 */
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
