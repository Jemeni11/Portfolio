import Head from "next/head";
import FirstPageSection from "@/components/FirstPageSection";
import type { PageTemplateType } from "@/types/page";

/**
 * The PageTemplate component
 * @param metaContent The content of the meta tag
 * @param metaTitle The content of the title tag
 * @param pageSectionTitle The title of the first page section
 * @param children The children of the PageTemplate component
 * */
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
