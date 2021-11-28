import React from 'react';
import { useAppSelector } from '../store-Redux/hooks';

interface IProps {
  totalQuestions: number;
}

const ProgressBar: React.FC<IProps> = ({ totalQuestions }) => {
  const currentQuestion = useAppSelector(
    (state) => state.questions.currentQuestion
  );
  return (
    <div>
      question {currentQuestion + 1}/{totalQuestions}
    </div>
  );
};

export default ProgressBar;
