import PropTypes from 'prop-types';
import './TransactionHistoryItem.css';

export const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <tbody className="transString">
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
