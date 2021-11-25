import React from 'react';
import { IQuestion } from '../models/IQuestion';
import './Summary.css';

interface IProps {
  questions: Array<IQuestion>;
  userAnswers: Map<number, number>;
  tryAgain: () => void;
}

const calculateGrade = (numOfCorrectAnswer: number, numOfQuestions: number) => {
  return (numOfCorrectAnswer * 100) / numOfQuestions;
};

const Summary: React.FC<IProps> = (props: IProps) => {
  const numOfCorrectAnswers = () => {
    let correct = 0;
    correct = props.questions.filter((question, index) => 
      question.correct === props.userAnswers.get(index)
    ).length;
    return correct;
  };

  return (
    <div className='content'>
      <div>
        <p>You did it!!!</p>
        <p>Number Of Correct answers: {numOfCorrectAnswers()}</p>
        <p>
          Grade:{' '}
          {calculateGrade(numOfCorrectAnswers(), props.questions.length)}
        </p>
      </div>

      <div>
        <button onClick={() => props.tryAgain()}>Try Again</button>
      </div>
    </div>
  );
};

export default Summary;
