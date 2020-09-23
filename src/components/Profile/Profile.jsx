import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

export default function Profile({
  name = "UserName",
  tag = "UserTag",
  location = "PlanetEarth",
  avatar = "",
  stats = [],
}) {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.statItemName}>Followers</span>
          <span className={styles.statItemValue}>{followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statItemName}>Views</span>
          <span className={styles.statItemValue}>{views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statItemName}>Likes</span>
          <span className={styles.statItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
