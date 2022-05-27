import * as React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { setAnswer } from "../../slices/challange/challangeSlice";
import { mapPercentageToClassName } from "../../common/utilities";
import { Toggle, TToggle } from "../../components/Toggle";

import { TAnswer } from ".";

import "./Challange.css";

function verify(answers: TAnswer[]) {
  const totalCorrectAnswers = answers.filter((answer) => answer.correct).length;
  const percentageOfCorrectAnswers =
    (totalCorrectAnswers / answers.length) * 100;

  return { totalCorrectAnswers, percentageOfCorrectAnswers };
}

export function Challange() {
  const { question, answers } = useAppSelector((state) => state.challange);
  const { percentageOfCorrectAnswers } = verify(answers);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`challange ${mapPercentageToClassName(
        percentageOfCorrectAnswers
      )}`}
    >
      <h1>{question}</h1>
      {answers.map((answer: TToggle) => (
        <Toggle
          key={answer.id}
          name={answer.id}
          disabled={answer.correct}
          options={answer.options}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement> | string
          ): void => {
            const optionId =
              typeof event === "string" ? event : event.target.value;
            dispatch(
              setAnswer({
                answerId: answer.id,
                optionId: optionId,
              })
            );
          }}
        />
      ))}
      <h3>
        {percentageOfCorrectAnswers === 100
          ? "The answer is correct"
          : "The answer is incorrect"}
      </h3>
    </div>
  );
}
