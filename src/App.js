import "./App.css";
import Multiplicar from "./components/Operacoes/Operacoes";

import Entrada from "./components/Entrada/Entrada";

function App() {
  return (
    <div className="App">
      <div className="App"></div>
      <Entrada nome=" (+ - * / )" />

      <Multiplicar />
    </div>
  );
}

export default App;
