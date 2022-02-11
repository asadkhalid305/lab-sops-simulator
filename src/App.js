// packages
import React from "react";

// utils
import Routes from "./app/routes";

// components
import BaseContainer from "./components/platform/BaseContainer";

// styles
import "./App.css";

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
