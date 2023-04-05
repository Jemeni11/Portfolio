import type { button } from "@/types/button";
import styles from "@/styles/Buttons.module.css";

export default function PrimaryButton({
  title,
  animated,
  buttonClass,
  onClick,
}: button) {
  let buttonstyle = `${styles.primaryButton}`;
  if (animated) buttonstyle += ` ${styles.animatedButton}`;
  if (buttonClass) buttonstyle += ` ${buttonClass}`;
  return (
    <button onClick={onClick} className={`py-4 px-6 border border-white border-solid ${buttonstyle}`} type="button">
      <span>{title}</span>
    </button>
  );
}
