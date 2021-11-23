import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content'
import Summary from './components/Summary'
import {IQuestion} from './models/IQuestion';

const App: React.FC<{}> = ({}) => {
  const [loadJson, setLoadJson] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(new Array<IQuestion>());
  const [numOfCorrectAnswer, setNumOfCorrectAnswer] = useState(0);
  
  const nextQuestion = (answerChoosed: number) => {
    if(questions[currentQuestion].correct === answerChoosed){
      setNumOfCorrectAnswer(numOfCorrectAnswer+1);
    }
    setCurrentQuestion(currentQuestion+1);
  }

  useEffect(() => {
    fetch('questions.json')
    .then((response) => response.json())
    .then(data => setQuestions(data.questions));
    setLoadJson(true);
  }, [])


  const tryAgain = () => {
    setCurrentQuestion(0);
    setNumOfCorrectAnswer(0);
  }

  const WhichPage: React.FC = () => {
    if (currentQuestion < questions.length){
      return <Content questionList={questions} currentQuestion={currentQuestion} nextQuestion={nextQuestion}/>;
    }
    else{
      return <Summary numOfQuestions={questions.length} numOfCorrectAnswer={numOfCorrectAnswer} tryAgain={tryAgain}/>;
    }
  }

  return (
    loadJson ?
    <div className="App">
      <WhichPage/>
    </div>
    : <p> LOADING.... </p>
  );
}

export default App;
