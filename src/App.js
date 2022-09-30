import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css'

function App() {
  const [input, setInput] = useState('')

  function handlesearch() {
    if (input === '') {
      alert("Preencha algum CEP!")
      return;
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>
      <div className='containerInput'>
        <input type="text"
          placeholder='Digite seu cep'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='buttonSearch'>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>
      <main className='main'>
        <h2>CEP: 79000-589</h2>
        <span>Rua teste Algum</span>
        <span>Complemento</span>
        <span>Vila Rosa</span>
        <span>São Paulo</span>
      </main>
    </div>
  );
}

export default App;
