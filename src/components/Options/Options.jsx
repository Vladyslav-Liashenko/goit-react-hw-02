export const Options = (props) => {

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
        })
    }

    return (
  <div>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};
