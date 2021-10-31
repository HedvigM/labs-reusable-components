import React from "react";
import "./Button.css";

export const Button = ({ onSubmit }) => {
  return (
    <>
      <button type="submit" onSubmit={onSubmit} disabled={() => {}}>
        <p>I am a button!</p>
      </button>
    </>
  );
};
