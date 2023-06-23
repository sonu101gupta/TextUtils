import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handlefUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert(" Converted to UpperCase","success");
  };

  const handlefloclick = () => {
    setText(text.toLowerCase());
    props.showAlert(" Converted to LowerCase","success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert(" Speech Synthesis is running","success");
  };

  const removeDuplicates = () => {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos) => {
      return wordArr.indexOf(item) === pos;
      
    });
    newText = newText.join(" ");
    setText(newText);
    props.showAlert(" Duplicates are removed","success");
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert(" Extra Spaces are removed","success")
  };

  const capitalizeText = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert(" Text Capitalized","success")
  };

  const handleCopy=()=>
  {
    var text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied","success")

  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <div className="mb-3">
          <h1 >{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            style={{backgroundColor:props.mode ==='dark'?'#042743':'white',
          color:props.mode ==='dark'?'white':'#042743'}}
            rows="8"
            onChange={handleOnchange}
            placeholder="Enter Text Here"
        
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handlefUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlefloclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={removeDuplicates}>
          Remove Duplicates
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
        </div>

      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>
          {0.008 * (text.split(" ").length - 1)} minutes, You will take to read
          it.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview here..."}</p>
      </div>
    </div>
  );
}




// Creating Dark mode 
// component about and understand the states
