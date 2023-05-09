import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [emailState, setEmailState] = useState({ value: "", isValid: null });

  const emailChangeHandler = (event) => {
    setEmailState({ value: event.target.value, isValid: null });
  };

  const validateEmailHandler = () => {
    setEmailState({
      value: emailState.value,
      isValid: emailState.value.includes("@"),
    });
  };

  return (
    <>
      {" "}
      <div
        className={`${classes.control} ${
          emailState.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
    </>
  );
};

export default Input;
