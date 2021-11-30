import React from 'react';
import { useParams } from 'react-router-dom';
import { useTriviaCollection } from '../store-Redux/hooks';

interface IProps {
  finishGame: () => void;
}

const ProgressBar: React.FC<IProps> = ({ finishGame }) => {
  const params = useParams();
  const {questions} = useTriviaCollection();
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
      <p>question {currentQuestion + 1}/{questions.length}</p>
    </div>
  );
};

export default ProgressBar;
