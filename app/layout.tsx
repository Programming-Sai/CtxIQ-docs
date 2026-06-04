import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CtxIQ</title>
        <meta
          name="description"
          content="Context and memory orchestration toolkit for building smarter AI assistants with TypeScript."
        />
        <meta name="robots" content="noindex, nofollow" />
        <style>{`html, body { height: 100%; margin: 0; } #root { height: 100%; }`}</style>
      </head>
      <body className="min-h-screen w-full bg-black text-white">
        <div
          id="root"
          className="min-h-screen w-full relative overflow-x-hidden"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_2.5%,rgba(255,255,255,0)_2.5%),linear-gradient(rgba(255,255,255,0.02)_2.5%,rgba(255,255,255,0)_2.5%)]"
            style={{ backgroundSize: "40px 40px" }}
          />
          <div className="absolute right-0 top-[403px] w-[800px] h-[800px] blur-[40px] opacity-10 bg-[radial-gradient(circle,rgba(146,129,247,1)_0%,rgba(92,124,255,0.3)_50%,rgba(92,124,255,0)_70%)]" />
          <div className="absolute left-1/2 top-[calc(50%-756px)] w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 blur-[50px] opacity-5 bg-[radial-gradient(circle,rgba(92,124,255,1)_0%,rgba(92,124,255,0)_70%)]" />

          {children}
        </div>
      </body>
    </html>
  );
}
