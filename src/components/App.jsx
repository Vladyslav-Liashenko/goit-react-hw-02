import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('count');
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  let total = count.good + count.neutral + count.bad;
  let positive;

  if (count.good !== 0) {
    positive = Math.round(((count.good + count.neutral) / total) * 100);
  } else {
    positive = 0;
  }

  const heandleLeaveFeedback = option => {
    setCount({
      ...count,
      [option]: count[option] + 1,
    });
  };

  const handleClickReset = () => {
    setCount({
      ...count,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        heandleLeaveFeedback={heandleLeaveFeedback}
        handleClickReset={handleClickReset}
      />
      {total !== 0 ? (
        <Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
