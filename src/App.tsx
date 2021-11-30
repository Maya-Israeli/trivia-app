import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './App.css';
import Content from './components/Content';
import { useAppDispatch, useAppSelector } from './store-Redux/hooks';
import { next, prev, setUserAnswers } from './store-Redux/questionsSlice';

const App: React.FC = () => {
  const [loadJson] = useState(true);
  const navigate = useNavigate();

  const currentQuestion = useAppSelector(
    (state) => state.questions.currentQuestion
  );
  const dispatch = useAppDispatch();

  const updateUserAnswers = (answer: number) => {
    dispatch(setUserAnswers(answer));
  };

  const nextQuestion = () => {
    dispatch(next());
    navigate(`./${currentQuestion+2}`);
  };

  const prevQuestion = () => {
    dispatch(prev());
    navigate(`./${currentQuestion}`);
  };

  const finishGame = () => {
    navigate("../../Summary");
  }

  // useEffect(() => {
  //   fetch('questions.json')
  //     .then((response) => response.json())
  //     .then((data) => setQuestions(data.questions));
  //   setLoadJson(true);
  // }, []);

  return loadJson ? (
    <div className='App'>
        <Content
          nextQuestion={nextQuestion}
          updateUserAnswers={updateUserAnswers}
          prevQuestion={prevQuestion}
          finishGame={finishGame}
        />
    </div>
  ) : (
    <p> LOADING.... </p>
  );
};

export default App;
