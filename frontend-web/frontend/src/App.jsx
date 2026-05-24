import "./styles/style.css";
import logo from "./assets/logo/logo.png";

function App() {
  return (
    <div className="container">

      <div className="logo-area">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h1>Lanchonete Sabor & Cia</h1>

      <h2>🍔 Cardápio</h2>

      <div className="card">
        <h3>X-Burger</h3>
        <p>R$ 18</p>
      </div>

      <div className="card">
        <h3>Batata Frita</h3>
        <p>R$ 12</p>
      </div>

      <button>Fazer Pedido</button>

    </div>
  );
}

export default App;