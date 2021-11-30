import React from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import './Content.css';
import { useTriviaCollection } from '../store-Redux/hooks';
import { NavLink } from 'react-router-dom';

interface IProps {
  nextQuestion: () => void;
  updateUserAnswers: (answerChoosed: number) => void;
  prevQuestion: () => void;
  finishGame: () => void;
}

const Content: React.FC<IProps> = (props: IProps) => {

  const {questions} = useTriviaCollection();
  return (
    <div>
      <header>
        <h1>My Trivia App</h1>
      </header>

      <nav>
        {questions.map((question, index) => (
          <NavLink
            className="navLink"
            to={`/questions/${index+1}`}
            key={index}
          >
            {"Q"+(index+1)}
          </NavLink>
        ))}
      </nav>

      <div className="question">
        <Question
          nextQuestion={props.nextQuestion}
          updateUserAnswers={props.updateUserAnswers}
          prevQuestion={props.prevQuestion}
        />
      </div>

      <div className="progressBar">
        <ProgressBar
          finishGame={props.finishGame}
        />
      </div>
    </div>
  );
};

export default Content;
