import { useState } from "react";
import "./App.css";
import Card from "./component/Card/card";
import Grid from "./component/Grid/grid.jsx"

function App() {
  return (
      <div className="App">
        <Grid numberOfBoard={9}/>
      </div>
  );
}

export default App;
