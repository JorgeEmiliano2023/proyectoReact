import logo from './logo.svg';
import '../src/CSS/App.css';
import React from 'react';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';

function App() {

  const saludar = () => {
    alert('Saludos!!!');
  }

  return (

<React.Fragment>

  <Navegacion />

    <div className="Main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={saludar}>
          Hola Chango
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <Footer />

    <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
    </div>

</React.Fragment>


  );
}

export default App;
