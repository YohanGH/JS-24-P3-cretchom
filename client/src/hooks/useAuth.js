import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthentificationContext } from "../context/authentification";

const useAuth = () => {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(AuthentificationContext);

  const login = async (mail, password) => {
    try {
      const response = await fetch(`${URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
        credentials: "include",
      });

      if (response.status === 200) {
        setUpdate(!update);
        toast.success("Connexion réussie !");
        navigate("/page-recherche");
      } else {
        toast.error("Email ou mot de passe incorrect !");
      }
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard."
      );
      console.error("Login error:", err);
    }
  };

  return { login };
};

export default useAuth;
