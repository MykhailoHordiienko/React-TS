import { FriendsListProps } from '../../types';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
