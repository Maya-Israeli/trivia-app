import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTriviaCollection = () => {
    const questions = useAppSelector((state) => state.questions.questions);
    const userAnswers = useAppSelector((state) => state.questions.userAnswers);
    return {userAnswers, questions }
}
