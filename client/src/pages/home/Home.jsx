import { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./Home.css";


import LogoPatounes from "../../assets/logo/1patounes.png";
import CatDog from "../../assets/images/catDog.jpg";
import { AuthentificationContext } from "../../context/authentification";

function Home() {
  const { auth } = useContext(AuthentificationContext);
  const navigate = useNavigate();

    if (auth !== null && auth !== false) {
      navigate("/page-recherche");
    }

  return (
    <div className="Home">
      <header className="HomeHeader">
        <img
          className="HomeLogoCicorne"
          src={CatDog}
          alt="un chat et un chien couchés dans l'herbe"
        />
      </header>
      <div className="homeRightContainer">
        <main className="HomeMain">
          <section className="HomeSectionTitle">
            <img
              className="HomeLogoPatounes"
              src={LogoPatounes}
              alt="Empreinte d'annimal"
            />
            <h1 className="HomeTitle">Cretchom</h1>
          </section>
          <nav className="HomeNav">
            <ul className="HomeNavList">
              <li className="HomeNavItem">
                <Link className="HomeNavLink" to="/connexion">
                  Connexion
                </Link>
              </li>
              <li className="HomeNavItem">
                <Link className="HomeNavLink" to="/inscription">
                  Inscription
                </Link>
              </li>
              <li className="HomeNavItem">
                <Link className="HomeNavLink" to="/page-recherche">
                  Visiteur
                </Link>
              </li>
            </ul>
          </nav>
        </main>
        <footer className="HomeFooter">
          <p>© 2024 Cretchom. Tous droits réservés.</p>
          <NavLink to="/mentions-legales" className="navlink">mentions légales</NavLink>
        </footer>
      </div>
    </div>
  );
}

export default Home;
