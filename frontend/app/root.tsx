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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HY15JTMSX1"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HY15JTMSX1');
          `}
        </script>
        {/* <!-- JSON-LD Structured Data --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema, null, 2),
          }}
        />

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

// const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID as string;

export default function App() {
  // useEffect(() => {
  //   if (GA_MEASUREMENT_ID) {
  //     initGtag(GA_MEASUREMENT_ID);
  //   }
  // }, []);
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
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <img
          src="not-found.jpg"
          alt="404 Not Found"
          style={{
            width: 'full',
            height: '400px',
            objectFit: 'cover',
            filter: 'drop-shadow(0 4px 12px rgba(99, 98, 98, 0.6))',
            borderRadius: '1.5rem',
            marginBottom: '1.5rem',
          }}
        />

        <p
          style={{
            color: '#d1d5db',
            marginBottom: '1.5rem',
            fontSize: '1.125rem',
            lineHeight: '1.6',
          }}
        >
          {details}
        </p>

        {stack && (
          <pre
            style={{
              textAlign: 'left',
              fontSize: '0.875rem',
              background: 'rgba(17, 24, 39, 0.9)',
              border: '1px solid #4b5563',
              color: '#9ca3af',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginBottom: '1.5rem',
              maxHeight: '240px',
            }}
          >
            <code>{stack}</code>
          </pre>
        )}

        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            fontSize: '1.125rem',
            fontWeight: '500',
            color: '#000',
            background: '#f59e0b',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLAnchorElement).style.background = '#fbbf24')
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLAnchorElement).style.background = '#f59e0b')
          }
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
