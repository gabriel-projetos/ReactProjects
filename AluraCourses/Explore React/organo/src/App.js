import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Front-End',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Data Science',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores], colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
