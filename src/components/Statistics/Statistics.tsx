import css from './statistics.module.css';
import StatisticItem from './StatisticItem';

type StatisticsProps = {
  title?: string;
  stats: { id: string; label: string; percentage: number }[];
};

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
