import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import TagManager from 'react-gtm-module';

import { LinksFunction } from "@remix-run/node";

import { ClientOnly } from "remix-utils/client-only";

import globalStyles from "../app/styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <ClientOnly>
          {() => { TagManager.initialize({gtmId: "GTM-T9WD37B2"}); return <></> }}
      </ClientOnly>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9WD37B2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
        <ClientOnly>
          {() => {
            const colors = ["#055", "#2c484a", "#4a1f25", "#12440e", "#806533"];
            setInterval(() => {
              //@ts-ignore
              document.querySelector(':root')?.style?.setProperty("--featured-color",  colors[Math.floor(Math.random() * colors.length)]);
            }, 20000);
            return <></>
          }}
        </ClientOnly>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
