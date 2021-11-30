import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store-Redux/hooks';
import { fromBegining } from '../store-Redux/questionsSlice';
import './Summary.css';


const calculateGrade = (numOfCorrectAnswer: number, numOfQuestions: number) => {
  return (numOfCorrectAnswer * 100) / numOfQuestions;
};

const Summary: React.FC = () => {
  const userAnswers = useAppSelector((state) => state.questions.userAnswers);
  const questions = useAppSelector((state) => state.questions.questions);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const numOfCorrectAnswers = () => {
    let correct = 0;
    correct = questions.filter((question, index) => 
      question.correct === userAnswers[index]
    ).length;
    return correct;
  };

  const tryAgain = () => {
    navigate("../questions");
    dispatch(fromBegining());
  };

  return (
    <div className='content'>
      <div>
        <p>You did it!!!</p>
        <p>Number Of Correct answers: {numOfCorrectAnswers()}</p>
        <p>
          Grade:{' '}
          {calculateGrade(numOfCorrectAnswers(), questions.length)}
        </p>
      </div>

      <div>
        <button onClick={() => tryAgain()}>Try Again</button>
      </div>
    </div>
  );
};

export default Summary;


