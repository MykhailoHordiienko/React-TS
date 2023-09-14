export type ProfileProps = {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
};

export type StatisticItemProps = {
  label: string;
  percentage: number;
};

export type StatisticsProps = {
  title?: string;
  stats: { id: string; label: string; percentage: number }[];
};

export type FriendsListProps = {
  friends: { avatar: string; name: string; isOnline: boolean; id: number }[];
};

export type FriendsListItemProps = {
  avatar: string;
  name: string;
  isOnline: boolean;
};

export type TransactionHistoryProps = {
  transactions: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
};
