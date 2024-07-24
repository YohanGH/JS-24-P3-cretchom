import { Link } from "react-router-dom";
import styles from './Footer.module.css';

function Footer() {
  return (
    <section id={styles.connexionFooter}>
      <Link to="/inscription">Pas encore de compte ? S'inscrire</Link>
    </section>
  );
}

export default Footer;
