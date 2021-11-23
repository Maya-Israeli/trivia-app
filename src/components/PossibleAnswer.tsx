import React from 'react';
import './PosibleAnswer.css';


interface IProps{
    answer: string;
    nextQuestion: Function;
    currentQuestion: number;
    answerIndex: number;
}

const PossibleAnswer: React.FC<IProps> = (props: IProps) => {
  
    const handleClick = () => {
        props.nextQuestion(props.answerIndex);
    }
    return (
    <li>
        <input type="radio" id="{answerIndex}" name="answer" onClick={handleClick}/>
        <label htmlFor="{answerIndex}" onClick={handleClick}>{props.answer}</label>
    </li>
  );
}

export default PossibleAnswer;
