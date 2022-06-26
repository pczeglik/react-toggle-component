import { TAnswer } from '.';

type TSolution = {
  answerId: string;
  optionId: string;
}

type ChallangeState = {
  question: string;
  answers: TAnswer[];
  solutions: TSolution[],
}

export const initialState: ChallangeState = {
  question: "What are the ideal conditions inside an office?",
  answers: [
    {
      correct: false,
      id: "answer-id-1",
      options: [
        {
          checked: false,
          id: "option-id-1",
          text: "good pay",
        },
        {
          checked: false,
          id: "option-id-2",
          text: "bad pay",
        },
      ],
    },
    {
      correct: false,
      id: "answer-id-2",
      options: [
        {
          checked: false,
          id: "option-id-3",
          text: "lot of meetings",
        },
        {
          checked: false,
          id: "option-id-4",
          text: "less meetings",
        },
      ],
    },
    {
      correct: false,
      id: "answer-id-3",
      options: [
        {
          checked: false,
          id: "option-id-5",
          text: "free coffee",
        },
        {
          checked: false,
          id: "option-id-6",
          text: "expensive coffee",
        },
      ],
    },
    {
      correct: false,
      id: "answer-id-4",
      options: [
        {
          checked: false,
          id: "option-id-7",
          text: "bear in office",
        },
        {
          checked: false,
          id: "option-id-8",
          text: "dog in office",
        },
      ],
    }
  ],
  solutions: [
    {
      answerId: "answer-id-1",
      optionId: "option-id-1",
    },
    {
      answerId: "answer-id-2",
      optionId: "option-id-4",
    },
    {
      answerId: "answer-id-3",
      optionId: "option-id-5",
    },
    {
      answerId: "answer-id-4",
      optionId: "option-id-8",
    },
  ],
};
