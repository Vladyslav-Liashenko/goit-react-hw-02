export const Feedback = props => {



    let total = props.good + props.neutral + props.bad;
    let positive;
    if (props.good !== 0) {
        positive = Math.round(((props.good + props.neutral) / total) * 100);
    } else {
        positive = 0;
    }
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};
