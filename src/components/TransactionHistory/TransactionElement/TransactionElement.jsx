import React from "react";
import styles from "./TransactionElement.module.css";
import PropTypes from "prop-types";

export default function TransactionElement({ type, amount, currency, even }) {
  const styleClassName = even ? styles.even : styles.odd;

  return (
    <tr>
      <td className={styleClassName}>{type}</td>
      <td className={styleClassName}>{amount}</td>
      <td className={styleClassName}>{currency}</td>
    </tr>
  );
}

TransactionElement.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
