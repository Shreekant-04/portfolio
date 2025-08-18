import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './app.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect } from 'react';
import { initGtag } from './utils/gtag';
import { personSchema } from './utils/schema';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },

  { rel: 'icon', href: '/favicon16x16.ico' },
  { rel: 'apple-touch-icon', href: '/favicon32x32.ico' },
  { rel: 'mask-icon', href: '/favicon32x32.ico', color: '#5bbad5' },
  { rel: 'shortcut icon', href: '/favicon32x32.ico' },

  { rel: 'manifest', href: '/manifest.json' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Shreekant" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Shreekant - Portfolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image-home.png" />
        <meta property="og:image:alt" content="Portfolio preview image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Shreekant_4" />
        <meta name="twitter:creator" content="@Shreekant_4" />
        {/* <!-- JSON-LD Structured Data --> */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID as string;

export default function App() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      initGtag(GA_MEASUREMENT_ID);
    }
  }, []);
  return (
    <main className="root">
      <Analytics />
      <SpeedInsights />
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
