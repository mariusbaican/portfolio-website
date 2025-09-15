import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import NavBar from "./_components/navbar";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marius Baican's Portfolio",
  description:
    "This is the place where I showcase my work as a software engineer.",
  // icons: {
  //   icon: "",
  // },
  // openGraph: {
  //   url: "https://mariusbaican.com/",
  //   siteName: "Marius Baican's Portfolio",
  //   images: [
  //     {
  //       url: "", // This needs to be an absolute path
  //       width: 256,
  //       height: 256,
  //       alt: "Marius Baican Icon",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: "", // This needs to be an absolute path
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${beVietnamPro.className} antialiased overflow-hidden bg-[var(--hero-bg)] w-full h-full min-w-[100vw] min-h-[100vh]`}
      >
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
