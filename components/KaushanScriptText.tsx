import { Kaushan_Script } from "@next/font/google";

const Kaushan_Script_Font = Kaushan_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type Props = {
  text: string;
  classes?: string;
};

/**
 * KaushanScriptText is a simple TSX component that returns a span
 * @param text The text to be rendered with `font-family: KaushanScript`
 * @param classes Classes to modify the span
 * @returns A span
 */
const KaushanScriptText = ({ text, classes }: Props) => {
  return (
    <span
      className={`${Kaushan_Script_Font.className} ${classes ? classes : ""}`}
    >
      {text}
    </span>
  );
};

export default KaushanScriptText;
