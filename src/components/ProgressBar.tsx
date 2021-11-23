import React from 'react';

interface IProps{
    currentQuestion: number
    totalQuestions: number
}

const ProgressBar: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
        question {props.currentQuestion+1}/{props.totalQuestions}
    </div>
  );
}

export default ProgressBar;
