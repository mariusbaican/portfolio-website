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
  title: "Marius Baican - Software Engineer",
  description:
    "This is the place where I showcase my experience as a software engineer.",
  // icons: {
  //   icon: "",
  // },
  // openGraph: {
  //   url: "https://mariusbaican.com/",
  //   siteName: "Marius Baican - Software Engineer",
  //   images: [
  //     {
  //       url: "", // This needs to be an absolute path
  //       width: 256,
  //       height: 256,
  //       alt: "Portfolio Icon",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: "", // This needs to be an absolute path
  // },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mariusbaican.com/#person",
  name: "Marius Baican",
  url: "https://mariusbaican.com",
  about:
    "This is the place where I showcase my experience as a software engineer.",
  sameAs: [
    "https://www.linkedin.com/in/marius-baican",
    "https://github.com/mariusbaican",
  ],
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "POLITEHNICA University of Bucharest",
    url: "https://upb.ro",
  },
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
        <link
          rel="canonical"
          href="https://mariusbaican.com"
        />
        <meta
          name="description"
          content="This is the place where I showcase my experience as a software engineer."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
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
