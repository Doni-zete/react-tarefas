import { useState } from "react";
import Item from "../Item/Item";
import "./Operacoes.css";

const Operacoes = () => {
  const [numeros, setNumeros] = useState([]);
  const [numerosText1, setNumeroText1] = useState("");
  const [numerosText2, setNumeroText2] = useState("");
  const [operacoes, setOperacao] = useState("+");

  const handleSubmit = (event) => {
    event.preventDefault();

    const numero1 = parseFloat(numerosText1);
    const numero2 = parseFloat(numerosText2);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      let resultado;

      switch (operacoes) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
        default:
          resultado = 0;
      }

      setNumeros([...numeros, resultado]);

      setNumeroText1("");
      setNumeroText2("");
    }
  };

  const handleChange1 = (event) => {
    setNumeroText1(event.target.value);
  };

  const handleChange2 = (event) => {
    setNumeroText2(event.target.value);
  };

  const handleSelectChange = (event) => {
    setOperacao(event.target.value);
  };

  return (
    <section className="numerolist">
      <h2 className="todo-title">Calcular</h2>

      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="number"
          id="numeros"
          placeholder="Digite um valor: "
          value={numerosText1}
          onChange={handleChange1}
        />

        <select
          onChange={handleSelectChange}
          value={operacoes}
          className="operacoes-section"
        >
          <option value="+">Somar</option>
          <option value="-">Subtrair</option>
          <option value="*">Multiplicar</option>
          <option value="/">Dividir</option>
        </select>

        <input
          type="number"
          id="numeros"
          placeholder="Digite um valor: "
          value={numerosText2}
          onChange={handleChange2}
        />
        <button type="submit">Calcular</button>
      </form>

      <ol className="todos">
        {numeros.map((numero, index) => (
          <Item numero={numero} key={index} />
        ))}
      </ol>
    </section>
  );
};
export default Operacoes;
