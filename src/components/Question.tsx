import React from 'react';
import { IQuestion } from '../models/IQuestion';
import PossibleAnswer from './PossibleAnswer';

interface IProps {
  questionList: IQuestion[];
  currentQuestion: number;
  nextQuestion: (answerChoosed: number) => void;
}
const Question: React.FC<IProps> = (props: IProps) => {
  const answers = props.questionList[props.currentQuestion].answers;
  return (
    <div>
      <p>{props.questionList[props.currentQuestion].question}</p>
      <ul>
        {answers.map((currAnswer: string, index: number) => (
          <PossibleAnswer
            key={'question' + props.currentQuestion + 'answer' + index}
            answer={currAnswer}
            nextQuestion={props.nextQuestion}
            currentQuestion={props.currentQuestion}
            answerIndex={index}
          />
        ))}
      </ul>
      <button>next</button>
    </div>
  );
};

export default Question;
