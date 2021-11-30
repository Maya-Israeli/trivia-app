import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Answer{ 
    answer: number, 
    currentQuestion:number
}
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
    //currentQuestion: 0,
    userAnswers: new Array<number>(4),
  },
  reducers: {
    // next: (state) => {
    //   state.currentQuestion += 1;
    // },
    // prev: (state) => {
    //   state.currentQuestion -= 1;
    // },
    fromBegining: (state) => {
      state.userAnswers = new Array<number>(4);
    },
    setUserAnswers: (state, action: PayloadAction<Answer>) => {
      state.userAnswers[action.payload.currentQuestion] = action.payload.answer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fromBegining, setUserAnswers } =
  questionsSlice.actions;

export default questionsSlice.reducer;
