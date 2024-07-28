import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useForgotPassword = (URL) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 250) {
        toast.success(
          "Un e-mail de réinitialisation du mot de passe a été envoyé."
        );
        navigate("/");
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Une erreur est survenue. Veuillez réessayer."
        );
      }
    } catch (err) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return {
    email,
    setEmail,
    handleSubmit,
  };
};

export default useForgotPassword;
