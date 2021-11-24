import React from 'react';
import './Summary.css';

interface IProps {
  numOfQuestions: number;
  numOfCorrectAnswer: number;
  tryAgain: () => void;
}

const calculateGrade = (numOfCorrectAnswer: number, numOfQuestions: number) => {
  return (numOfCorrectAnswer * 100) / numOfQuestions;
};

const Summary: React.FC<IProps> = (props: IProps) => {
  return (
    <div className='content'>
      <div>
        <p>You did it!!!</p>
        <p>Number Of Correct answers: {props.numOfCorrectAnswer}</p>
        <p>
          Grade:{' '}
          {calculateGrade(props.numOfCorrectAnswer, props.numOfQuestions)}
        </p>
      </div>

      <div>
        <button onClick={() => props.tryAgain()}>Try Again</button>
      </div>
    </div>
  );
};

export default Summary;
