import SrirachaClassName from "@/components/FontsClassNames/SrirachaClassName";

type QuotePropsType = {
  cite_link: string;
  quote: string;
  author: string;
  work?: string;
};

export default function Quote({
  cite_link,
  quote,
  author,
  work,
}: QuotePropsType) {
  return (
    <figure className="w-4/5 bg-slate-500 min-h-max my-[20vh] mx-[10%] px-12 py-8 rounded-2xl text-center">
      <blockquote
        cite={cite_link}
        className={
          quote.length > 110 ? "text-[3.65rem] leading-none" : "text-6xl"
        }
      >
        <p>"{quote}"</p>
      </blockquote>
      <figcaption className="mt-6 text-4xl">
        —{author}
        {work && <cite className={SrirachaClassName}>, {work}</cite>}
      </figcaption>
    </figure>
  );
}
