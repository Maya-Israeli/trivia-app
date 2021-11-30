import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [
      {
        question:
          'Where does the President of the United States live while in office?',
        answers: ['New York', 'The White House', 'The Moon'],
        correct: 1,
      },
      {
        question: 'If you freeze water, what do you get?',
        answers: ['Ice', 'Water', 'Juice'],
        correct: 0,
      },
      {
        question: 'What do bees make?',
        answers: ['Hoeny', 'Milk', 'Apples'],
        correct: 0,
      },
      {
        question: 'Which Disney  movie is Elsa in?',
        answers: ['lion King', 'Mickey Mouse', 'Frozen'],
        correct: 2,
      },
    ],
    currentQuestion: 0,
    userAnswers: new Array<number>(4),
  },
  reducers: {
    next: (state) => {
      state.currentQuestion += 1;
    },
    prev: (state) => {
      state.currentQuestion -= 1;
    },
    fromBegining: (state) => {
      state.userAnswers = new Array<number>(4);
      state.currentQuestion = 0;
    },
    setUserAnswers: (state, action: PayloadAction<number>) => {
      state.userAnswers[state.currentQuestion] = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { next, prev, fromBegining, setUserAnswers } =
  questionsSlice.actions;

export default questionsSlice.reducer;
