import PropTypes from "prop-types";
import Patoune from "../../../assets/logo/1patounes.png";
import styles from './Header.module.css';

function Header({ title }) {
  return (
    <section id={styles.header}>
      <img src={Patoune} alt="Patte orange" id={styles.Patoune} />
      <h1>{title}</h1>
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
