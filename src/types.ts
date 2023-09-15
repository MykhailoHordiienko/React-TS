export type FeedbackOptionsProps = {
  options: {
    bad: number;
    good: number;
    neutral: number;
  };
  handleOption: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type OptionStateType = {
  bad: number;
  good: number;
  neutral: number;
};

export type StatisticsProps = {
  message: string;
  statistic: {
    total: number;
    positive: number;
    bad: number;
    good: number;
    neutral: number;
  };
};
