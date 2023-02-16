import Image from "next/image";
import styles from "../styles/Home.module.css";
import CartoonMe from "../public/cool_icon.png";

export default function HeroSection() {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.leftSideHalfWidth}>
        <h1>Hey, I'm Emmanuel</h1>
        <p>
          Front-end Web (ReactJS) Developer • A parselmouth in my spare time •
          Always coding in Py & Js • Currently learning NextJS
        </p>
      </div>
      <div className={styles.halfWidth}>
        <figure>
          <Image alt="a cool picture" src={CartoonMe} priority={true} />
          <figcaption>
            Created with{" "}
            <a href="https://www.drawkit.com/">
              Drawkit's Notion Style Avatar Creator
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
