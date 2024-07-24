import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthentificationContext } from "../../context/authentification";
import Bell from "../../assets/images/cloche.png";
import BellAlert from "../../assets/images/clocheAlerte.png";
import "./Navbar.css";

function NavMenu() {
  const { auth, update, setUpdate } = useContext(AuthentificationContext);
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const disconnect = async () => {
    try {
      const response = await fetch(`${URL}user/logout`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
      });
      if (response.status === 200) {
        setUpdate(!update);
        toast.success("Déconnecté avec succes");
        setTimeout(navigate("/"), 5000);
      }
    } catch (error) {
      toast.error("Erreur");
    }
  };
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await fetch(`${URL}notification/`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setNotification(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      }
    };
    fetchReservation();
  }, [URL]);

  return (
    <nav className="navMenu">
      <div className="navMenu-container">
        <div className="navMenu-item">
          <NavLink className="linkItem" to="/page-recherche">
            Page de recherche
          </NavLink>
        </div>
        {auth === null || auth === false ? (
          <>
            <div className="navMenu-item">
              <NavLink to="/connexion">Connexion</NavLink>
            </div>
            <div className="navMenu-item">
              <NavLink to="/inscription">Inscription</NavLink>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="navMenu-item">
              <NavLink className="linkItem" to="/reservation">
                <img
                  id="bell"
                  src={
                    notification.length === 0 ||
                    notification.length === undefined
                      ? Bell
                      : BellAlert
                  }
                  alt={
                    notification === 0
                      ? "Cloche"
                      : "Cloche avec un point d'exclamation"
                  }
                />
                Mes réservations
              </NavLink>
            </div>
            <div className="navMenu-item">
              <NavLink to={`/profil/${auth.user.sub}`} className="linkItem">
                Profil
              </NavLink>
            </div>
            <div className="navMenu-item">
              <button
                className="navMenu-item disconnect"
                type="button"
                onClick={disconnect}
              >
                Déconnexion
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavMenu;
