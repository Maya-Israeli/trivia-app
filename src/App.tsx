import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import { useAppDispatch, useAppSelector } from './store-Redux/hooks';
import { next, prev, setUserAnswers } from './store-Redux/questionsSlice';

const App: React.FC = () => {
  const [loadJson] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const currentQuestion = useAppSelector(
  //   (state) => state.questions.currentQuestion
  // );

  const params = useParams();
  console.log(params.currentQuestion);
  const currentQuestion: number = params.currentQuestion
    ? parseInt(params.currentQuestion)
    : 1;

  if (!currentQuestion){
    return <p>item not found!</p>
  }

   console.log('current question is: ',currentQuestion);

  const updateUserAnswers = (answer: number) => {
    dispatch(setUserAnswers(answer));
  };

  const nextQuestion = () => {
    dispatch(next());
    navigate(`../questions/${currentQuestion+1}`);
  };

  const prevQuestion = () => {
    dispatch(prev());
    navigate(`../questions/${currentQuestion-1}`);
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
