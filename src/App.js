import React, { useState } from "react";
import TextToSpeech from "./TextToSpeech";
import "./App.css";

const App = () => {
  const [userText, setUserText] = useState("");

  const handleInputChange = (event) => {
    setUserText(event.target.value);
  };

  return (
    <div className="container">
      <h1>Text To Speech Converter</h1>
      <textarea
        placeholder="Type your text here..."
        value={userText}
        onChange={handleInputChange}
        rows={5}
        cols={50}
      />
      <TextToSpeech text={userText} />
      {/* <p>{userText}</p> */}
    </div>
  );
};

export default App;
