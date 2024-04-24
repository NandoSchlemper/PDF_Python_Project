import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setMensagem(data.mensagem))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>
            Welcome to our services! Wesley at your disposal!
          </h1>
          <p>
            Mensagem do Backend: {mensagem}
          </p>
        </header>
      </div>
    </>
  )
}

export default App
