import React from 'react';
import { IQuestion } from '../models/IQuestion';
import PossibleAnswer from './PossibleAnswer';

interface IProps {
  questionList: IQuestion[];
  currentQuestion: number;
  nextQuestion: () => void;
  updateUserAnswers: (answerChoosed: number) => void;
  userAnswers: Map<number, number>;
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
            currentQuestion={props.currentQuestion}
            answerIndex={index}
            updateUserAnswers={props.updateUserAnswers}
            userAnswers={props.userAnswers}
          />
        ))}
      </ul>
      <button onClick={() => props.nextQuestion()}>next</button>
    </div>
  );
};

export default Question;
