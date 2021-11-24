import React from 'react';
import './PosibleAnswer.css';

interface IProps {
  answer: string;
  nextQuestion: (answerChoosed: number) => void;
  currentQuestion: number;
  answerIndex: number;
}

const PossibleAnswer: React.FC<IProps> = (props: IProps) => {
  const handleClick = () => {
    props.nextQuestion(props.answerIndex);
  };
  return (
    <li>
      <input type='radio' name='answer' onClick={handleClick} />
      <label onClick={handleClick}>{props.answer}</label>
    </li>
  );
};

export default PossibleAnswer;
