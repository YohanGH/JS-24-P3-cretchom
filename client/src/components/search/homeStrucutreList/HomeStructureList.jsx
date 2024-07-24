import PropTypes from "prop-types";

import IsProfessionnal from "../isProfessionnal/IsProfessional";
import UserAnimal from "../userAnimal/UserAnimal";
import "./HomeStructureList.css";

function HomeStructureList({ structure }) {
  return (
    <div id="userCard" className="userCard">
      <div id="userGeneral">
        <div id="userImg">
          <img id="userPicture" src={structure.avatar} alt={structure.username} />
        </div>
        <div id="userInfo">
          <h3 id="userName">{structure.username}</h3>
          <p id="userLocation">
            {structure.postal_code} {structure.location}
          </p>
          <IsProfessionnal professional={structure.is_professional} />
        </div>
      </div>

      <ul id="userPref">
        <UserAnimal dog={structure.dog} cat={structure.cat} />
        <li className="price">
          <p id="userPrice">{structure.price} € </p>
        </li>
      </ul>
    </div>
  );
}

HomeStructureList.propTypes = {
  structure: PropTypes.shape({
    username: PropTypes.string.isRequired,
    postal_code: PropTypes.string.isRequired,
    is_professional: PropTypes.number.isRequired,
    cat: PropTypes.number.isRequired,
    dog: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeStructureList;
