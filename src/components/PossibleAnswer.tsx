import { useAppSelector } from '../store-Redux/hooks';
import './PosibleAnswer.css';

interface IProps {
  answer: string;
  answerIndex: number;
  updateUserAnswers: (answerChoosed: number) => void;
}

const PossibleAnswer: React.FC<IProps> = (props: IProps) => {
  const currentQuestion = useAppSelector((state) => state.questions.currentQuestion);
  const userAnswers = useAppSelector((state) => state.questions.userAnswers);


  const handleClick = (event: any) => {
    props.updateUserAnswers(props.answerIndex);
  };
  return (
    <li>
    <label>
      <input
        type='radio'
        name='answer'
        onChange={handleClick}
        checked={userAnswers[currentQuestion]===props.answerIndex}
      />
        {props.answer} 
      </label>
    </li>
  );
};

export default PossibleAnswer;
