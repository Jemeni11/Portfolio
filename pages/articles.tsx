import PageTemplate from "@/components/PageTemplate";
import Quote from "@/components/Quote";

const Articles = () => {
  return (
    <PageTemplate
      metaContent="Emmanuel Jemeni's Articles"
      metaTitle="Articles | Emmanuel Jemeni"
      pageSectionTitle="Articles"
    >
      <section>
        <Quote
          author="Isaac Asimov"
          quote="Writing, to me, is simply thinking through my fingers."
          cite_link="https://www.brainyquote.com/quotes/isaac_asimov_110281"
        />
      </section>
    </PageTemplate>
  );
};

export default Articles;
