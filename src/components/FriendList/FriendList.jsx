import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";

import PropTypes from "prop-types";

import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
