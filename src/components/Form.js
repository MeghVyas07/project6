import React, { useState } from "react";

export default function Form(props) {
  const [text, settext] = useState("Enter text here");
  const [text2, settext2] = useState("");
  function clickup(upp) {
    let newtext = text2.toUpperCase();
    settext2(newtext);
    settext("please enter before clicking");
    props.seta('Text converted to Uppercase', 'Success! ');
  }
  function clickdn() {
    let newtext = text2.toLowerCase();
    settext2(newtext);
    settext("please enter before clicking");
    props.seta('Text converted to Lowercase', 'Success! ')
  }
  function changeon(event) {
    settext2(event.target.value);
    settext("Enter text here");
  }
  function clearall() {
    settext2("");
    settext("Enter text here")
    props.seta('Text Cleared', 'Success! ')
  }
  return (
    <div className={`text-${props.mode2} text-center`}>
      <h1>{props.heading}</h1>
      <div className={`mb-3 text-${props.mode2}`}>
        <textarea
          className={`w-50 form-control-center rounded border`}
          id="box"
          rows="7"
          placeholder={text}
          onChange={changeon}
          value={text2}
        ></textarea>
      </div>
      <p className="text-center">
        {text2.split(" ").length - 1} words & {text2.length} letters
      </p>
      <button className="btn btn-primary" onClick={clickup}>
        Convert to Uppercase
      </button>
      <button className="ms-3 btn btn-primary" onClick={clickdn}>
        Convert to Lowercase
      </button>
      <button className="ms-3 btn btn-primary" onClick={clearall}>
        Clear All
      </button>
    </div>
  );
}