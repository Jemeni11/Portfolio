import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PT_Sans } from "@next/font/google";
import Navbar from "@/components/Navbar";

const PTSans = PT_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={PTSans.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
