import React from "react";
import AnswersItem from "./AnswersItem";
import { FormInput } from "./FormElement";

type AnswersListProps = {
  answersList: FormInput[];
};

export default function AnswersList(props: AnswersListProps) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
