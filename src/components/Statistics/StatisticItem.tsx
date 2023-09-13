import css from './statisticItem.module.css';

type Props = {
  label: string;
  percentage: number;
};

const StatisticItem = ({ label, percentage }: Props) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6)}`;
  };
  const color = getRandomHexColor();
  return (
    <li className={css.item} style={{ backgroundColor: color }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
