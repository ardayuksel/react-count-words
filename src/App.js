import { useState } from "react";
import "./App.css";

function App() {
  const [sentence, setSentence] = useState("");
  const [splitted, setSplitted] = useState(0);
  const deneme = (e) => {
    if (e.target.value === "") {
      setSplitted(0);
      return splitted;
    } else {
      setSplitted(sentence.split(/\s+/).length);
      return splitted;
    }
  };
  return (
    <div className="App">
      <p className="title">Count Words</p>
      <input
        className="input-section"
        type="text"
        placeholder="Enter words here"
        onChange={(e) => {
          setSentence(e.target.value);
          deneme(e);
        }}
      />
      <p className="result">{splitted}</p>
    </div>
  );
}

export default App;
