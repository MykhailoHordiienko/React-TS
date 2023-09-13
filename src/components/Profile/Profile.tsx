import css from './profile.module.css';

type ProfileProps = {
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

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}: ProfileProps) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span
          //   className={}
          >
            {followers}
          </span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span
          //   className={}
          >
            {views}
          </span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span
          //   className={}
          >
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
