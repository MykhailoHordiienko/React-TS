import { StatisticsProps } from '../../types';

const Statistics = ({ message, statistic }: StatisticsProps) => {
  const { bad, good, neutral, positive, total } = statistic;
  return (
    <>
      {total <= 0 ? (
        <h3>{message}</h3>
      ) : (
        <>
          <p>Bad: {bad}</p>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Positive: {positive ? positive : 0} %</p>
          <p>Total: {total}</p>
        </>
      )}
    </>
  );
};

export default Statistics;
