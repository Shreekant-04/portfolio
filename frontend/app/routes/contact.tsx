import type { Route } from '../+types/root';
import ContactComponent from '../components/contact/Contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact | Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        "Contact page for Shreekant's portfolio. Get in touch for web development, design, and freelance opportunities. Email, phone, and social links provided.",
    },
    {
      name: 'keywords',
      content:
        'Contact, Portfolio, Web Developer, Designer, Freelance, Email, Phone, Social Media, Shreekant',
    },
    { name: 'og:title', content: 'Contact | Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        "Reach out to Shreekant for web and app development, and freelance projects. Let's connect!",
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://shreekant.dev/contact' },
    { name: 'og:image', content: 'https://shreekant.dev/og-image-contact.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact | Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content:
        'Contact Shreekant for web development, design, and freelance work.',
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-contact.png',
    },
  ];
}
export const links: Route.LinksFunction = () => [
  { rel: 'canonical', href: 'https://shreekant.dev/contact' },
];
export const handle = {
  breadcrumb: 'Contact',
};

export default function Contact() {
  return <ContactComponent />;
}
