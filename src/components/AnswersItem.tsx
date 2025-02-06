import React from "react";
import { FormInput } from "./FormElement";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: { name, colorRating, spendTime, remarks },
}: {
  answerItem: FormInput;
}) {
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colorRating}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          {
            //cursed workaround to convert object of bools to array
          }
          <ItemsList
            list={Object.keys(spendTime).filter((k) => spendTime[k])}
          />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{remarks}</span>
        </p>
      </article>
    </li>
  );
}
