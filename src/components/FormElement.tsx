import React, { FormEvent, FormEventHandler, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type FormInput = {
  colorRating: number;
  spendTime: {
    swimming: boolean;
    bathing: boolean;
    chatting: boolean;
    noTime: boolean;
  };
  remarks: string;
  name?: string;
  email: string;
};

const schema = yup
  .object({
    colorRating: yup.number().required(),
    spendTime: yup
      .object({
        swimming: yup.bool().default(false).required(),
        bathing: yup.bool().default(false).required(),
        chatting: yup.bool().default(false).required(),
        noTime: yup.bool().default(false).required(),
      })
      .required(),
    remarks: yup.string().required(),
    name: yup.string(),
    email: yup.string().email().required(),
  })
  .required();

type FormElementProps = {
  onSubmit: (data: FormInput) => void;
};

export default function FormElement(props: FormElementProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormInput> = (data) => props.onSubmit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input
                id="color-one"
                type="radio"
                {...register("colorRating")}
                value={1}
              />
              <label htmlFor="color-one">1</label>
            </li>
            <li>
              <input
                id="color-two"
                type="radio"
                {...register("colorRating")}
                value={2}
              />
              <label htmlFor="color-two">2</label>
            </li>
            <li>
              <input
                id="color-three"
                type="radio"
                {...register("colorRating")}
                value={3}
              />
              <label htmlFor="color-three">3</label>
            </li>
            <li>
              <input
                id="color-four"
                type="radio"
                {...register("colorRating")}
                value={4}
              />
              <label htmlFor="color-four">4</label>
            </li>
          </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" {...register("spendTime.swimming")} />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input {...register("spendTime.bathing")} type="checkbox" />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input {...register("spendTime.chatting")} type="checkbox" />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input {...register("spendTime.noTime")} type="checkbox" />I
                don't like to spend time with it
              </label>
            </li>
          </ul>
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea {...register("remarks")} cols={30} rows={10}></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input type="text" {...register("name")} />
        </label>
        <label>
          Leave us your email pretty please??
          <input type="email" {...register("email")} />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </>
  );
}
