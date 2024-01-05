import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`} data-testid="footer">
      <p>Built for Ceezer &copy;</p>
    </footer>
  );
};
