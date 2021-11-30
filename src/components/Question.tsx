import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store-Redux/hooks';
import PossibleAnswer from './PossibleAnswer';

interface IProps {
  nextQuestion: () => void;
  updateUserAnswers: (answerChoosed: number) => void;
  prevQuestion: () => void;
}
const Question: React.FC<IProps> = (props: IProps) => {
  const questions = useAppSelector((state) => state.questions.questions);
  const params = useParams();
  const current: number = params.currentQuestion
    ? parseInt(params.currentQuestion)
    : 1;
  const questionObj = questions[current - 1];

  return (
    <div>
      <p>{questionObj.question}</p>
      <ul>
        {questionObj.answers.map((currAnswer: string, index: number) => (
          <PossibleAnswer
            key={'question' + current + 'answer' + index}
            answer={currAnswer}
            answerIndex={index}
            updateUserAnswers={props.updateUserAnswers}
          />
        ))}
      </ul>
      <button onClick={() => props.prevQuestion()} disabled={current - 1 < 1}>
        prev
      </button>
      <button
        onClick={() => props.nextQuestion()}
        disabled={current - 1 >= questions.length - 1}
      >
        next
      </button>
    </div>
  );
};

export default Question;
