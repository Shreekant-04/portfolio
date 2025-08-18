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


//     <!-- Google tag (gtag.js) -->
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-HY15JTMSX1');
// </script>
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
