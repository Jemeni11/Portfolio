import Image from "next/image";
import Link from "next/link";
import CartoonMe_NoBG from "../public/cartoon_me-removebg.png";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <Link href="/">
        <div className={styles.creatorDataContainer}>
          <Image src={CartoonMe_NoBG} alt="Icon" />
          <div className={styles.creatorNameContainer}>
            <p>Emmanuel C. Jemeni</p>
            <p>@Jemeni11</p>
          </div>
        </div>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tools">Tools</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
