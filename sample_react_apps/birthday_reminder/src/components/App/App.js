import React from "react";
import ListComponent from "../ListComponent/ListComponent";
import "./App.css";

export const App = () => {
  return (
    <div className="root_container">
      <div className="list_component">
        <ListComponent></ListComponent>
      </div>
    </div>
  );
};

export default App;
