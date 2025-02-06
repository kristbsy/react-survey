import React from "react";
import { useState } from "react";
import FormElement, { FormInput } from "./FormElement";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveys, setSurveys] = useState<FormInput[]>([]);

  const onNewFormSubmit = (data: FormInput) => {
    setSurveys([...surveys, data]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={surveys} />
      </section>
      <section className="survey__form">
        <FormElement onSubmit={onNewFormSubmit} />
      </section>
    </main>
  );
}

export default Survey;
