import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import './TransactionHistory.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transHistory">
      <thead className="transHead">
        <tr>
          <th className="transHead">Type</th>
          <th className="transHead">Amount</th>
          <th className="transHead">Currency</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency, id }) => {
        return (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            id={id}
          />
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
