import styles from './Feedback.module.css';

export const Feedback = props => {
  let total = props.good + props.neutral + props.bad;
  let positive;
  if (props.good !== 0) {
    positive = Math.round(((props.good + props.neutral) / total) * 100);
  } else {
    positive = 0;
  }
  return (
      <div className={styles.divfeedback}>
      <p className={styles.p}>Good: {props.good}</p>
      <p className={styles.p}>Neutral: {props.neutral}</p>
      <p className={styles.p}>Bad: {props.bad}</p>
      <p className={styles.p}>Total: {total}</p>
      <p className={styles.p}>Positive: {positive} %</p>
    </div>
  );
};
