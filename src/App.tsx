import { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Header from './components/Header/Header';
import { OptionStateType } from './types';

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

  return (
    <>
      <Header />
      <section className="container">
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={option} handleOption={handleOption} />
      </section>
    </>
  );
}

export default App;
