import Patoune from "../../../assets/logo/1patounes.png";
import styles from './Header.module.css';

function Header() {
  return (
    <section id={styles.headerConnexion}>
      <img src={Patoune} alt="Patte orange" id={styles.connexionPatoune} />
      <h1>Connexion</h1>
    </section>
  );
}

export default Header;
