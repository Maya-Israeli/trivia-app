import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store-Redux/hooks';

interface IProps {
  totalQuestions: number;
  finishGame: () => void;
}

const ProgressBar: React.FC<IProps> = ({ totalQuestions, finishGame }) => {
  const params = useParams();
  const currentQuestion: number = params.currentQuestion
    ? parseInt(params.currentQuestion)
    : 1;

  if (!currentQuestion){
    return <p>item not found!</p>
  }

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
