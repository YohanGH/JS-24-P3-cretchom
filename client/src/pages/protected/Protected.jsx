import { Link } from "react-router-dom";
import styles from "../notFound/NotFound.module.css";
import catChock from "../../assets/images/catChock.png";

function Protected() {
  return (
    <div className={styles.errorPage}>
      <h1>Accès Refusé </h1>
      <h2>Vous n'avez pas l'autorisation d'accéder à ce contenu.</h2>
      <Link className={`${styles.linkredirection} buttonType1`} to="/connexion">
        Cliquez ici pour vous connecter
      </Link>
      <img src={catChock} alt="trois chats surpris" />
    </div>
  );
}

export default Protected;
