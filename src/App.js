import logo from "./logo.svg";
import "./App.css";

import User from "../src/components/dev";
function App() {
  const devGabraiel = { Nome: "Gabriel", Idade: 19, Pais: "Brasil" };
  const devFelipe = { Nome: "Felipe", Idade: 28, Pais: "Paris" };
  const devMariana = { Nome: "Marina", Idade: 24, Pais: "Itália" };
  return (
    <div className="App">
      <header className="App-header">
        <User
          name={devGabraiel.Nome}
          idade={devGabraiel.Idade}
          pais={devGabraiel.Pais}
        />
        <User
          name={devFelipe.Nome}
          idade={devFelipe.Idade}
          pais={devFelipe.Pais}
        />

        <User
          name={devMariana.Nome}
          idade={devMariana.Idade}
          pais={devMariana.Pais}
        />
      </header>
    </div>
  );
}

export default App;
