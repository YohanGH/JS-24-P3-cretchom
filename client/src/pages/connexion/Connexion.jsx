import { Link, useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from 'react-toastify';
import Patoune from "../../assets/logo/1patounes.png";
import "./Connexion.css";
import { AuthentificationContext } from "../../use_context/authentification";


function Connexion() {
  const URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [passwordform, setPasswordform] = useState("");
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(AuthentificationContext);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const mail = formData.get("mail");
      const password = formData.get("password");

      const response = await fetch(`${URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
        credentials: "include",
      });

      if (response.status === 200) {
        setUpdate(!update)
        toast.success("Connexion réussie !");
        return navigate("/page-recherche");
      }
      toast.error("Email ou mot de passe incorrect !");
      return { error: "incorrect mail or password" };
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard."
      );
      console.error("Login error:", err);
      return {
        error: "An error occurred during login. Please try again later.",
      };
    }
  };

  return (
    <>
      <section id="headerConnexion">
        <img src={Patoune} alt="orange paw" id="connexionPatoune" />
        <h1>Connexion </h1>
      </section>

      <section id="connexionBody">
        <form method="post" id="ConnexionDiv" onSubmit={handleSubmit}>
          <label htmlFor="mail">Adresse mail</label>
          <input
            className="ConnexionInput"
            type="mail"
            name="mail"
            minLength={3}
            maxLength={254}
            value={email}
            onChange={(event) => handleInputChange(event, setEmail)}
            required
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            className="ConnexionInput"
            type="password"
            name="password"
            minLength={12}
            value={passwordform}
            onChange={(event) => handleInputChange(event, setPasswordform)}
            required
          />

          <button type="submit" id="connexionButton" className="buttonType1">
            Connexion
          </button>

          <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
        </form>
      </section>

      <section id="connexionFooter">
        <Link to="/inscription">Pas encore de compte ? S'inscrire</Link>
      </section>
    </>
  );
}

export default Connexion;
