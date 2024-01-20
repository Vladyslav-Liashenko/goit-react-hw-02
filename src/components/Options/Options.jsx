import styles from './Options.module.css';
export const Options = props => {
  const handleClickGood = () => {
    props.setCount({
      ...props,
      good: props.good + 1,
    });
  };

  const handleClickNeutral = () => {
    props.setCount({
      ...props,
      neutral: props.neutral + 1,
    });
  };

  const handleClickBad = () => {
    props.setCount({
      ...props,
      bad: props.bad + 1,
    });
  };

  const handleClickReset = () => {
    props.setCount({
      ...props,
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    });
  };

  return (
    <div className={styles.divbtn}>
      <button className={styles.btn} onClick={handleClickGood}>Good 😁</button>
      <button className={styles.btn} onClick={handleClickNeutral}>Neutral 🤔</button>
      <button className={styles.btn} onClick={handleClickBad}>Bad 😒</button>
      <button className={styles.btn} onClick={handleClickReset}>Reset 🗑</button>
    </div>
  );
};
