import PropTypes from "prop-types";
import Pen from "../../assets/images/penblue.png";
import LogoCicorne from "../../assets/logo/cicorne.png";
import styles from "./ProfileHeader.module.css";

function ProfileHeader({
  username,
  isEditMode,
  handleEditClick,
  valueName,
  setCustomer,
}) {
  const onChange = (e, champ) => {
    setCustomer((user) => ({ ...user, [champ]: e.target.value }));
  };
  return (
    <header className={styles.profilePageHeader}>
      <img
        className={styles.profilePageImg}
        src={LogoCicorne}
        alt="Utilisateur"
      />
      <section className={styles.profilePageH1Container}>
        <h1 className={styles.profilePageH1}>
          {isEditMode === true ? (
            <input
              type="text"
              defaultValue={username}
              className={styles.input}
              readOnly={!isEditMode}
              onChange={isEditMode ? (e) => onChange(e, valueName) : undefined}
            />
          ) : (
            username
          )}
        </h1>
      </section>
      {handleEditClick !== undefined && (
        <button
          type="button"
          className={styles.editButton}
          onClick={handleEditClick}
        >
          {isEditMode === true ? "Sauvegarder" : "Modifier"}
          <img
            className={styles.profilePagePen}
            src={Pen}
            alt="Crayon pour la modification des informations du compte"
          />
        </button>
      )}
    </header>
  );
}

ProfileHeader.propTypes = {
  username: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool,
  handleEditClick: PropTypes.func,
  valueName: PropTypes.string.isRequired,
  setCustomer: PropTypes.func.isRequired,
};

ProfileHeader.defaultProps = {
  isEditMode: false,
  handleEditClick: undefined,
};

export default ProfileHeader;
