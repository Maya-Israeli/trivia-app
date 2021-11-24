import React from 'react';

interface IProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<IProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div>
      question {currentQuestion + 1}/{totalQuestions}
    </div>
  );
};

export default ProgressBar;
