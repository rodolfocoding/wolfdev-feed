import styles from "./Header.module.css";
import wolfdevLogo from "../assets/wolfdev-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={wolfdevLogo} alt="Logotipo wolfdev" />
    </header>
  );
}
