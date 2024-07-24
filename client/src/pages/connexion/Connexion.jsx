import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";

// Import Hook
import useForm from "../../hooks/useForm";
import useAuth from "../../hooks/useAuth";

// Import CSS (global styles if necessary)
import "./Connexion.css";

function Connexion() {
  const [values, handleInputChange] = useForm({ email: "", password: "" });
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = values;
    login(email, password);
  };

  return (
    <div>
      <Header />
      <Form
        email={values.email}
        onEmailChange={(value) => handleInputChange({ target: { name: "email", value } })}
        password={values.password}
        onPasswordChange={(value) => handleInputChange({ target: { name: "password", value } })}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default Connexion;
