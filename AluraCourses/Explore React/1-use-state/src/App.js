import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [endereco, setEndereco] = useState({})

  const [enderecos, setEnderecos] = useState([])

  function manipularEndereco(evento){

    const cep = evento.target.value

    setEndereco({
      cep
    })

    if (cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(data => {

          setEnderecos(list => [...lista, endereco])

          setEndereco(enderecoAntigo => {
            return {
              ...enderecoAntigo,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            }
          })
        })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={manipularEndereco} placeholder='Digite o cep: '/>
        <ul>CEP: {endereco.cep}</ul>
        <ul>Bairro: {endereco.bairro}</ul>
        <ul>Cidade: {endereco.cidade}</ul>
        <ul>Estado: {endereco.estado}</ul>
      </header>
    </div>
  );
}

export default App;
