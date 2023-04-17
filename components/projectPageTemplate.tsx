import Head from "next/head";
import KaushanScriptClassName from "@/components/FontsClassNames/KaushanScriptClassName";
import type { PageTemplateType } from "@/types/page";

/**
 * Based of the PageTemplate component
 * in `@/components/PageTemplate.tsx`
 * @param metaContent The content of the meta tag
 * @param metaTitle The content of the title tag
 * @param pageSectionTitle The title of the first page section
 * @param children The children of the projectPageTemplate component
 */
export default function ProjectPageTemplate({
  metaContent,
  metaTitle,
  pageSectionTitle,
  children,
}: PageTemplateType) {
  return (
    <>
      <Head>
        <meta name="description" content={metaContent} />
        <title>
          {metaTitle.startsWith("Open Source")
            ? metaTitle
            : "Project | " + metaTitle}
        </title>
      </Head>
      <div className="w-full flex flex-col min-h-screen">
        <nav></nav>
        <CustomFirstPageSection text={pageSectionTitle} />
        {children}
      </div>
    </>
  );
}

function CustomFirstPageSection({ text }: { text: string }) {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center items-center text-center  gap-y-2">
      <p
        className={
          KaushanScriptClassName +
          " text-[3.5rem] underline underline-offset-[16px]"
        }
      >
        Project
      </p>
      <p className="font-bold text-[10rem] text-white/[.725]">
        <span className={KaushanScriptClassName}>{text}</span>
      </p>
    </section>
  );
}
