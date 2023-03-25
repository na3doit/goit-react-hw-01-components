import './StatisticsItem.css';
import { getRandomColor } from 'utils/getRandomColor';
import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li
      className="item"
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
