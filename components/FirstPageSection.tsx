import KaushanScriptClassName from "@/components/FontsClassNames/KaushanScriptClassName";

export default function FirstPageSection({ text }: { text: string }) {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center items-center gap-y-2">
      <p className=" font-bold text-[10rem] text-white/[.725]">
        <span className={KaushanScriptClassName}>{text}</span>
      </p>
    </section>
  );
}
