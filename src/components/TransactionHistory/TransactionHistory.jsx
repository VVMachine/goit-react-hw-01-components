import React from "react";
import TransactionElement from "./TransactionElement/TransactionElement";
// import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items = [] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeadElement}>Type</th>
          <th className={styles.tableHeadElement}>Amount</th>
          <th className={styles.tableHeadElement}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => {
          item.even = idx % 2;
          return <TransactionElement {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
