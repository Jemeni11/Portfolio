import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import type { linkButtonType } from "@/types/button";

export default function LinkButton({
  title,
  animated,
  buttonClass,
  href,
  linkClass,
}: linkButtonType) {
  return (
    <Link href={href} className={linkClass}>
      <PrimaryButton
        title={title}
        animated={animated}
        buttonClass={buttonClass}
      />
    </Link>
  );
}
