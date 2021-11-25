import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Summary from './components/Summary';
import { IQuestion } from './models/IQuestion';

const App: React.FC = () => {
  const [loadJson, setLoadJson] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(new Array<IQuestion>());
  const [userAnswers, setUserAnswers] = useState(new Map<number,number>());

  const updateUserAnswers = (answer: number) => {
    setUserAnswers(new Map(userAnswers.set(currentQuestion,answer)));
    console.log(userAnswers)
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  }

  useEffect(() => {
    fetch('questions.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
    setLoadJson(true);
  }, []);

  const tryAgain = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Map<number,number>());
  };

  const WhichPage: React.FC = () => {
    if (currentQuestion < questions.length) {
      return (
        <Content
          questionList={questions}
          currentQuestion={currentQuestion}
          nextQuestion={nextQuestion}
          updateUserAnswers={updateUserAnswers}
          userAnswers={userAnswers}
          prevQuestion={prevQuestion}
        />
      );
    } else {
      return (
        <Summary
          questions={questions}
          userAnswers={userAnswers}
          tryAgain={tryAgain}
        />
      );
    }
  };

  return loadJson ? (
    <div className='App'>
      <WhichPage />
    </div>
  ) : (
    <p> LOADING.... </p>
  );
};

export default App;
