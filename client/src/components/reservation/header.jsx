import PropTypes from "prop-types";
import styles from "../../pages/reservation/Reservation.module.css";

function Header({ title }) {
  return (
    <header className={styles.reservationHeader}>
      <h2 id={styles.reservationTitle}>{title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
