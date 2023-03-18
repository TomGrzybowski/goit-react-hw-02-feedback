import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {options.map(option => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
