import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marius Baican's Portfolio",
  description: "This is the place where I showcase my work as a developer.",
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
        className={`${inter.variable} ${caveat.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
