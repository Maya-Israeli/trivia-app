import React from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import './Content.css';
import { useAppSelector } from '../store-Redux/hooks';

interface IProps {
  nextQuestion: () => void;
  updateUserAnswers: (answerChoosed: number) => void;
  userAnswers: Map<number, number>;
  prevQuestion: () => void;
  finishGame: () => void;
}

const Content: React.FC<IProps> = (props: IProps) => {
  const questions = useAppSelector((state) => state.questions.questions);
  return (
    <div>
      <header>
        <h1>My Trivia App</h1>
      </header>

      <div className="question">
        <Question
          nextQuestion={props.nextQuestion}
          updateUserAnswers={props.updateUserAnswers}
          userAnswers={props.userAnswers}
          prevQuestion={props.prevQuestion}
        />
      </div>

      <div className="progressBar">
        <ProgressBar
          totalQuestions={questions.length}
          finishGame={props.finishGame}
        />
      </div>
    </div>
  );
};

export default Content;
