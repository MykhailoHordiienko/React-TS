import { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Header from './components/Header/Header';
import { OptionStateType } from './types';
import Statistics from './components/Statistics/Statistics';

function App() {
  const [option, setOption] = useState<OptionStateType>({
    bad: 0,
    good: 0,
    neutral: 0,
  });

  const handleOption = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { name },
    } = e;
    setOption(prev => {
      return {
        ...prev,
        [name]: prev[name as keyof OptionStateType] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(option).reduce((total, option) => total + option);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((option.good * 100) / countTotalFeedback());
  };

  const statistic = {
    total: countTotalFeedback(),
    positive: countPositiveFeedbackPercentage(),
    good: option.good,
    bad: option.bad,
    neutral: option.neutral,
  };

  return (
    <>
      <Header />
      <section className="container">
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={option} handleOption={handleOption} />
      </section>
      <section className="container mt-5">
        <h2>Statistics</h2>
        <Statistics message={'There is no statistics'} statistic={statistic} />
      </section>
    </>
  );
}

export default App;
