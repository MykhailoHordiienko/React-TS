import { FeedbackOptionsProps } from '../../types';

const FeedbackOptions = ({ options, handleOption }: FeedbackOptionsProps) => {
  const names = Object.keys(options);
  console.log(names);

  return (
    <>
      {names.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={e => {
            handleOption(e);
          }}
          className="btn btn-outline-primary">
          {option.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
