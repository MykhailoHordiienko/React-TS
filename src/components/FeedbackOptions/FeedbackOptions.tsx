import { FeedbackOptionsProps } from '../../types';

const FeedbackOptions = ({ options, handleOption }: FeedbackOptionsProps) => {
  const names = Object.keys(options);

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
