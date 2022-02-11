import React from "react";
import "./App.css";
import Routes from "./app/routes";
import BaseContainer from "./components/platform/BaseContainer";

function App() {
  return (
    <div className="App">
      <BaseContainer>
        <Routes />
      </BaseContainer>
    </div>
  );
}

export default App;
