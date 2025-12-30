import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const handleClick = (char) => {
    setText((prev) => prev + char);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Alphabet Buttons</h1>
        <p>Click letters (or use your keyboard) to build text.</p>

        <div className="output">{text}</div>

        <div className="backspace-container">
          <button className="backspace-btn" onClick={handleBackspace}>
            Backspace
          </button>
        </div>

        <div className="keys">
          {alphabets.map((char) => (
            <button
              key={char}
              className="key"
              onClick={() => handleClick(char)}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;