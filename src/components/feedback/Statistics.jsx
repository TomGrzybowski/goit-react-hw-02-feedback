import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback"></Notification>;
  } else {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    );
  }

  //     return (
  //     <>
  //       {total === 0 ? (
  //         <Notification message="There is no feedback"></Notification>
  //       ) : (
  //         // <Notification message="There is no feedback"></Notification>
  //         <div>
  //           <p>Good: {good}</p>
  //           <p>Neutral: {neutral}</p>
  //           <p>Bad: {bad}</p>
  //           <p>Total: {total}</p>
  //           <p>Positive Feedback: {positivePercentage}%</p>
  //         </div>
  //       )}
  //     </>
  //   );
};

export default Statistics;
