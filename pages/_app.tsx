import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { PT_Sans, Kaushan_Script, Sriracha } from "@next/font/google";

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#preloading
export const Kaushan_Script_Font = Kaushan_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const SrirachaFont = Sriracha({ weight: "400", subsets: ["latin"] });

const PTSans = PT_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={PTSans.className}>
      <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
