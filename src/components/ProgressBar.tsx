import React from 'react';
import { useAppSelector } from '../store-Redux/hooks';

interface IProps {
  totalQuestions: number;
  finishGame: () => void;
}

const ProgressBar: React.FC<IProps> = ({ totalQuestions, finishGame }) => {
  const currentQuestion = useAppSelector(
    (state) => state.questions.currentQuestion
  );

  const handleFinish = () => {
    finishGame();
  }

  return (
    <div>
      <button onClick={handleFinish}>finish</button>
      <p>question {currentQuestion + 1}/{totalQuestions}</p>
    </div>
  );
};

export default ProgressBar;
