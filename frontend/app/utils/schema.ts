// src/seo/schema.ts
// prettier-ignore
export const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Shreekant',
      url: 'https://shreekant.dev',
      image: 'https://shreekant.dev/profile.jpg',
      sameAs: [
        'https://github.com/Shreekant-04',
        'https://www.linkedin.com/in/shreekantkumar',
        'https://www.instagram.com/shree_4.6',
        'https://x.com/Shreekant_4',
        'https://medium.com/@shreekant04',
        'https://rapidapi.com/shreekant74sk/api/quotes-api12'
      ],
      jobTitle: 'Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'MHJ PHARMACONCEPTS PRIVATE LIMITED',
        url: 'https://mhjpharma.com'
      },
    },
   
    {
      '@type': 'WebSite',
      url: 'https://shreekant.dev',
      name: 'Shreekant Portfolio',
      publisher: {
        '@type': 'Person',
        name: 'Shreekant'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://shreekant.dev/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
    },
  ],
};

//  {
//       '@type': 'Organization',
//       name: 'Futuristic Design',
//       url: 'https://futuristicdesign.in',
//       logo: 'https://futuristicdesign.in/logo.png',
//       sameAs: [
//         'https://www.linkedin.com/company/futuristicdesign',
//         'https://www.instagram.com/futuristicdesign',
//       ],
//     },
