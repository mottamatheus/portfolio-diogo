import styles from "./header.module.css";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => (
  <header className={styles["-header"]}>
    <h1>{label}</h1>
  </header>
);
