import css from './FriendListItem.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, name, id }) => {
  return (
    <li className="items">
      <span className={isOnline ? 'isOnline' : 'isOffline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
