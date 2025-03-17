import { useEffect, useMemo } from "react";

const usePageSeo = ({ title, keywords, ogUrl }) => {
  // Check if window is defined (SSR handling)
  const isBrowser = typeof window !== "undefined";
  const currentUrl = isBrowser ? window.location.href : ogUrl;

  // Meta tag configurations
  const metaTags = useMemo(() => {
    return [
      { name: "title", content: title },
      { property: "og:title", content: title },
      { property: "og:url", content: ogUrl || currentUrl },
      { property: "twitter:title", content: title },
    ];
  }, [title, keywords, ogUrl, currentUrl]);

  useEffect(() => {
    if (!isBrowser) return;

    // Set page title
    if (title) document.title = title;

    // Update or create meta tags
    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;
      const selector = name
        ? `meta[name='${name}']`
        : `meta[property='${property}']`;
      let metaTag = document.querySelector(selector);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (name) metaTag.setAttribute("name", name);
        if (property) metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", currentUrl);
  }, [metaTags]);
};

export default usePageSeo;
