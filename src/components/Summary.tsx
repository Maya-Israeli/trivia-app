import React from 'react';
import './Summary.css';


interface IProps{
  numOfQuestions: number;
  numOfCorrectAnswer: number;
  tryAgain: Function;
}

const Summary: React.FC<IProps> = (props: IProps) => {
  const tryAgain = () => {
    props.tryAgain();
  }
  
  return (
    <div className="content">
      <div>
        <p>You did it!!!</p>
        <p>Number Of Correct answers: {props.numOfCorrectAnswer}</p>
        <p>Grade: {props.numOfCorrectAnswer * 100 / props.numOfQuestions}</p>
      </div>

      <div>
        <button onClick={tryAgain}>
					Try Again
				</button>
      </div>
    </div>
  );
}

export default Summary;
