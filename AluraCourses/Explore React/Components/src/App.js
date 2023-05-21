import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  function deletarColaborador(){
    console.log("Deletando colaborador")
  }

  //O input executa o evento onChange;
  //O onChange executa a função mudarCor;
  //O mudarCor execute o setTimes;
  //O setTimes muda o state;
  //O React percebe a mudança de state e compara o Virtual DOM com o DOM real, mudando as partes necessárias (no caso tudo que está relacionado com time.cor).
  function mudarCorTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor;
      }
      
      return time;
    }))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
        <Time 
          mudarCor={mudarCorTime}
          key={time.nome} 
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}/>
      )}
    </div>
  );
}

export default App;
