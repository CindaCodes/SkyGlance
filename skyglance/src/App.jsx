import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
