import Head from "next/head";
import HeroSection from "@/components/HomePageSections/HeroSection";
import AboutSection from "@/components/HomePageSections/AboutSection";
import ProjectsSection from "@/components/HomePageSections/ProjectsSection";
import ArticlesSection from "@/components/HomePageSections/ArticlesSection";
import ContactSection from "@/components/HomePageSections/ContactSection";
import FooterSection from "@/components/HomePageSections/FooterSection";

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
      <div className="flex flex-col md:gap-y-4">
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
