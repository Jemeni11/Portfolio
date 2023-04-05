import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Home page of Emmanuel Jemeni's portfolio website"
        />
        <title>Home | Emmanuel Jemeni</title>
      </Head>
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
        {/* <FooterSection /> */}
      </div>
    </>
  );
}
