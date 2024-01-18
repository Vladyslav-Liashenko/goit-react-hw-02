import { useState } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    positive: 0,
  });
  return (
    <>
      <Description />
      <Options
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        setCount={setCount}
      />
        <Feedback
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        total={count.total}
        positive={count.positive}
        setCount={setCount}
        />
        <Notification/>
    </>
  );
};
