import React from "react";

import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

function FriendListItem({
  avatar = "",
  name = "UserName",
  isOnline = null,
  id,
}) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
