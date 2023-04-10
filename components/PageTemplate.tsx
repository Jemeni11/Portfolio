import Head from "next/head";
import FirstPageSection from "@/components/FirstPageSection";

type PageTemplateType = {
  metaContent: string;
  metaTitle: string;
  pageSectionTitle: string;
  children: React.ReactNode;
};

export default function PageTemplate({
  metaContent,
  metaTitle,
  pageSectionTitle,
  children,
}: PageTemplateType) {
  return (
    <>
      <Head>
        <meta name="description" content={metaContent} />
        <title>{metaTitle}</title>
      </Head>
      <div className="w-full flex flex-col min-h-screen">
        <FirstPageSection text={pageSectionTitle} />
        {children}
      </div>
    </>
  );
}
