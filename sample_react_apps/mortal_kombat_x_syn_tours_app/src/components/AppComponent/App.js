import React, { useState, useEffect } from "react";
import PlayerComponent from "../PlayerComponent/PlayerComponent";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
let url =
  "https://raw.githubusercontent.com/german-wings/ReactSandbox/master/mortal_kombat.js";

const App = () => {
  //handle network calls
  const networkHandler = (container) => {
    let network_data = fetch(url);
    network_data
      .then((response) => {
        return response.text();
      })
      .then((response_text) => {
        //console.log(response_text);
        let data = JSON.parse(response_text);
        console.log(data);
        container((previousState) => {
          setLoading(false);
          return data;
        });
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    networkHandler(setPlayers);
    return undefined;
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  }

  return (
    <div className="appContainer">
      <h1>Mortal Kombat</h1>
      <h2>Choose Your Players</h2>
      <h3>Players Left {players.length}</h3>
      {players.map((data, index) => {
        data.unique_key = uuidv4();
        return (
          <PlayerComponent
            {...data}
            handle={setPlayers}
            key={data.unique_key}
          ></PlayerComponent>
        );
      })}
    </div>
  );
};

export default App;
