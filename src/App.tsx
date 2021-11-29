import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Summary from './components/Summary';
import { useAppDispatch, useAppSelector } from './store-Redux/hooks';
import { next, prev, fromBegining, setUserAnswers } from './store-Redux/questionsSlice';

const App: React.FC = () => {
  const [loadJson] = useState(true);

  const questions = useAppSelector((state) => state.questions.questions);
  const currentQuestion = useAppSelector(
    (state) => state.questions.currentQuestion
  );
  const dispatch = useAppDispatch();

  const updateUserAnswers = (answer: number) => {
    dispatch(setUserAnswers(answer));
  };

  const nextQuestion = () => {
    dispatch(next());
  };

  const prevQuestion = () => {
    dispatch(prev());
  };

  const finishGame = () => {

  }

  // useEffect(() => {
  //   fetch('questions.json')
  //     .then((response) => response.json())
  //     .then((data) => setQuestions(data.questions));
  //   setLoadJson(true);
  // }, []);

  const tryAgain = () => {
    dispatch(fromBegining());
  };

  const WhichPage: React.FC = () => {
    if (currentQuestion < questions.length) {
      return (
        <Content
          nextQuestion={nextQuestion}
          updateUserAnswers={updateUserAnswers}
          prevQuestion={prevQuestion}
          finishGame={finishGame}
        />
      );
    } else {
      return (
        <Summary
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
