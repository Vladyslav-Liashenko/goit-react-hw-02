import styles from './Description.module.css';
export const Description = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Sip Happens Café</h1>
      <p className={styles.p}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
