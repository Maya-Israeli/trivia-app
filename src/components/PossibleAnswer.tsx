import React, { useState } from 'react';
import './PosibleAnswer.css';

interface IProps {
  answer: string;
  currentQuestion: number;
  answerIndex: number;
  updateUserAnswers: (answerChoosed: number) => void;
}

const PossibleAnswer: React.FC<IProps> = (props: IProps) => {
  const handleClick = () => {
    props.updateUserAnswers(props.answerIndex);
  };
  return (
    <li>
      <input type='radio' name='answer' onClick={handleClick}/>
      <label onClick={handleClick}>{props.answer}</label>
    </li>
  );
};

export default PossibleAnswer;
