// src/seo/schema.ts
// prettier-ignore
export const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Shreekant Kumar",
      "alternateName": "Shreekant",
      "url": "https://shreekant.dev",
      "image": "https://shreekant.dev/profile.jpg",
      "sameAs": [
        "https://github.com/Shreekant-04",
        "https://www.linkedin.com/in/shreekantkumar",
        "https://www.instagram.com/shree_4.6",
        "https://x.com/Shreekant_4",
        "https://medium.com/@shreekant04"
      ],
      "jobTitle": "Full-Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "MHJ PHARMACONCEPTS PRIVATE LIMITED",
        "url": "https://mhjpharma.com"
      },
      "description": "Experienced Full-Stack Developer specializing in web and app development, passionate about building scalable, user-centric solutions.",
      "email": "mailto:shreekant4062@gmail.com",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "St. Matthews Public School"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "url": "https://shreekant.dev",
      "name": "Shreekant Portfolio",
      "publisher": {
        "@type": "Organization",
        "name": "Shreekant Portfolio",
        "url": "https://shreekant.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shreekant.dev/og-image-home.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://shreekant.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "name": "Shreekant Portfolio",
      "url": "https://shreekant.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shreekant.dev/og-image-home.png"
      },
      "sameAs": [
        "https://github.com/Shreekant-04",
        "https://www.linkedin.com/in/shreekantkumar"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shreekant.dev"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Skills",
          "item": "https://shreekant.dev/skills"
        },
        
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Projects",
          "item": "https://shreekant.dev/projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://shreekant.dev/contact"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Resume",
          "item": "https://shreekant.dev/resume.pdf"
        }
      ]
    }
  ]
};
