import "./ForgotPassword.css";

// import Hook
import useForgotPassword from "../../hooks/useForgotPassword";

// import components
import Header from "../../components/connexion/header/Header";

function ForgotPassword() {
  const URL = import.meta.env.VITE_API_URL;
  const { email, setEmail, handleSubmit } = useForgotPassword(URL);

  return (
    <div>
      <Header title="Réinitialisation du mot de passe" />
      <section id="forgotPasswordSection">
        <form method="post" id="forgotPassword" onSubmit={handleSubmit}>
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            className="forgotPasswordInput"
            type="email"
            name="mail"
            id="email"
            minLength={3}
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            id="forgotPasswordButton"
            className="buttonType1"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}

export default ForgotPassword;
