type sectionTemplateType = {
  sectionTitle: string;
  children: React.ReactNode;
};

export default function SectionTemplate({
  sectionTitle,
  children,
}: sectionTemplateType) {
  return (
    <section className="w-full flex min-h-screen py-4 flex-col items-center gap-y-2">
      <h2 className="font-bold text-[5rem] text-white/[.725] mb-4">
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
}
