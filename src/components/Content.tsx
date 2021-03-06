import React from 'react';
import { IQuestion } from '../models/IQuestion';
import ProgressBar from './ProgressBar'
import Question from './Question'
import './Content.css';


interface IProps{
    questionList: IQuestion[];
    currentQuestion: number;
    nextQuestion: Function;
}

const Content: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <header>
        <h1>My Trivia App</h1>
      </header>

      <div id="question">
        <Question questionList={props.questionList} currentQuestion={props.currentQuestion} nextQuestion={props.nextQuestion}/>
      </div>
      
      <div id="progressBar">
        <ProgressBar currentQuestion={props.currentQuestion} totalQuestions={props.questionList.length}/>
      </div>
    </div>
  );
}

export default Content;
