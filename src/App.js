import React from "react";
import "./App.css";
import NasaImage from './Components/nasaImage';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaImage/>
    </div>
  );
}

export default App;
