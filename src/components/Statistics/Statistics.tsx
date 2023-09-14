import css from './statistics.module.css';
import StatisticItem from './StatisticItem';
import { StatisticsProps } from '../../types';

const Statistics = ({ title, stats }: StatisticsProps) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title && title}</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
