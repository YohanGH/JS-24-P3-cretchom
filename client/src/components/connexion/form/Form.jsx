import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from './Form.module.css';

function Form({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  handleSubmit,
}) {
  return (
    <section id={styles.connexionBody}>
      <form method="post" id={styles.ConnexionDiv} onSubmit={handleSubmit}>
        <label htmlFor="mail">Adresse mail</label>
        <input
          className={styles.ConnexionInput}
          type="email"
          id="mail"
          name="mail"
          minLength={3}
          maxLength={254}
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          className={styles.ConnexionInput}
          type="password"
          id="password"
          name="password"
          minLength={12}
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          required
        />

        <button type="submit" id={styles.connexionButton}>
          Connexion
        </button>

        <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
      </form>
    </section>
  );
}

Form.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
