import './PosibleAnswer.css';

interface IProps {
  answer: string;
  currentQuestion: number;
  answerIndex: number;
  updateUserAnswers: (answerChoosed: number) => void;
  userAnswers: Map<number, number>;

}

const PossibleAnswer: React.FC<IProps> = (props: IProps) => {
  const handleClick = (event: any) => {
    console.log(event.target.value);
    props.updateUserAnswers(props.answerIndex);
  };
  return (
    <li>
    <label>
      <input
        type='radio'
        name='answer'
        onChange={handleClick}
        checked={props.userAnswers.get(props.currentQuestion)===props.answerIndex}
      />
        {props.answer} 
      </label>
    </li>
  );
};

export default PossibleAnswer;
