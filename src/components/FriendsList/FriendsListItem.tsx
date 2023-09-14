import { FriendsListItemProps } from '../../types';
import css from './friendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }: FriendsListItemProps) => {
  const status = isOnline ? 'green' : 'red';
  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: status }}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsListItem;
