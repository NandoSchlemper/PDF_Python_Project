import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState('');

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
          <p>
            Mensagem do Backend: {mensagem}
          </p>
        </header>
      </div>
    </>
  )
}

export default App
