import React from 'react';
import { useAppSelector } from '../store-Redux/hooks';
import PossibleAnswer from './PossibleAnswer';

interface IProps {
  nextQuestion: () => void;
  updateUserAnswers: (answerChoosed: number) => void;
  userAnswers: Map<number, number>;
  prevQuestion: () => void;

}
const Question: React.FC<IProps> = (props: IProps) => {
  const questions = useAppSelector((state) => state.questions.questions);
  const currentQuestion = useAppSelector(
    (state) => state.questions.currentQuestion
  );

  const answers = questions[currentQuestion].answers;

  return (
    <div>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {answers.map((currAnswer: string, index: number) => (
          <PossibleAnswer
            key={'question' + currentQuestion + 'answer' + index}
            answer={currAnswer}
            answerIndex={index}
            updateUserAnswers={props.updateUserAnswers}
            userAnswers={props.userAnswers}
          />
        ))}
      </ul>
      <button onClick={() => props.prevQuestion()} disabled={currentQuestion<1}>prev</button>
      <button onClick={() => props.nextQuestion()}>next</button>
    </div>
  );
};

export default Question;
