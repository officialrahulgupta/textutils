import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase.", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lowercase.", "success");

  };
  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared.", "success");

  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button
          className={`btn mx-3 btn-${props.mode === "dark" ? "dark" : "primary"}`}
          onClick={handleupClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn mx-3 btn-${props.mode === "dark" ? "dark" : "primary"}`}
          onClick={handlelowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn mx-3 btn-${props.mode === "dark" ? "dark" : "primary"}`}
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
