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
      total: 0,
      positive: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <>
      <Description />
      <Options
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        setCount={setCount}
      />
      {count.total !== 0 ? (
        <Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          total={count.total}
          positive={count.positive}
          setCount={setCount}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
