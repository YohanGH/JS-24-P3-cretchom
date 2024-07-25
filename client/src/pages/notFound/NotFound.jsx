import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import dogFriends from "../../assets/images/dogFriends.png";

function NotFound() {
  return (
      <div className={styles.errorPage}>
        <h1>Error 404</h1>
        <h2>La page que vous recherchez n'existe pas.</h2>
        <Link className={`${styles.linkredirection} buttonType1`} to="/">
            Retour à la page d'accueil
        </Link>
        <img src={dogFriends} alt="trois chiens surpris" />
      </div>
  );
}

export default NotFound;
