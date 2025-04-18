import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
      </div>
    </div>
  );
}

export default App;
