import React from "react";

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
  return <div>Quote</div>;
}
