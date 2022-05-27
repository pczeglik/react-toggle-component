import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const challangeSlice = createSlice({
  name: "challange",
  initialState: initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { answerId, optionId } = action.payload;
      const currentSolution = state.solutions.find(
        (solution) => solution.answerId === answerId
      );

      state.answers = state.answers.map((answer) => {
        if (answer.id !== answerId) return answer;

        return {
          ...answer,
          options: answer.options.map((option) => {
            option.checked = option.id === optionId;
            return option;
          }),
          correct: currentSolution?.optionId === optionId,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswer } = challangeSlice.actions;

export default challangeSlice.reducer;
