CREATE TABLE user (
  id INT(11) UNSIGNED PRIMARY KEY auto_increment NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  username VARCHAR(20) NOT NULL UNIQUE,
  phone_number VARCHAR(10) NOT NULL,
  location VARCHAR(55) NOT NULL,
  mail VARCHAR(254) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  resetPasswordToken VARCHAR(50) NOT NULL DEFAULT "",
  resetPasswordExpires TIMESTAMP,
  description TEXT,  avatar VARCHAR(254) DEFAULT 'http://localhost:3310/api/avatars/patoune.png'
);

CREATE TABLE home_structure (
  id INT(11) UNSIGNED PRIMARY KEY auto_increment NOT NULL,
  postal_code CHAR(5) NOT NULL,
  capacity INT NOT NULL, 
  is_professional TINYINT NOT NULL,
  cat TINYINT NOT NULL, 
  dog TINYINT NOT NULL, 
  price INT(11) NOT NULL, 
  user_id INT(11) UNSIGNED NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE animal (
  id INT(11) UNSIGNED PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(50) NOT NULL, 
  age INT NOT NULL,
  is_sterilized TINYINT NOT NULL,
  species ENUM('chat', 'chien') NOT NULL,
  is_tattooed_chipped TINYINT NOT NULL,
  breed VARCHAR(21),
  user_id INT(11) UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE reservation (
  id INT(11) UNSIGNED PRIMARY KEY auto_increment NOT NULL,
  reservation_date_beginning DATE NOT NULL,
  reservation_date_end DATE NOT NULL,
  home_structure_id INT(11) UNSIGNED NOT NULL, 
  animal_id INT(11) UNSIGNED NOT NULL, 
  status ENUM('waiting', 'confirm', 'cancel') DEFAULT 'waiting',
  priceday INT(11) NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animal(id),
  FOREIGN KEY (home_structure_id) REFERENCES home_structure(id)
);

CREATE TABLE notification (
  id INT(11) UNSIGNED PRIMARY KEY auto_increment NOT NULL,
  user_id INT(11) UNSIGNED NOT NULL,
  reservation_id INT(11) UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);