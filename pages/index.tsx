import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The portfolio website of Emmanuel Jemeni"
        />
        {/* Favicons */}
        {/* Defaults */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        {/* Apple iPhones */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* Android */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <title>Emmanuel Jemeni | Front-End Web Developer</title>
      </Head>
      <HomePage />
    </>
  );
}

function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
