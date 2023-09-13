import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    console.log("Deletando colaborador: ", id)
  }

  //O input executa o evento onChange;
  //O onChange executa a função mudarCor;
  //O mudarCor execute o setTimes;
  //O setTimes muda o state;
  //O React percebe a mudança de state e compara o Virtual DOM com o DOM real, mudando as partes necessárias (no caso tudo que está relacionado com time.cor).
  function mudarCorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      
      return time;
    }))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log('colaborador adicionado', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
        return colaborador
      }
    }))  
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => 
        <Time 
          mudarCor={mudarCorTime}
          key={time.nome} 
          time={time}
          aoFavoritar={resolverFavorito}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}/>
      )}
    </div>
  );
}

//react só envia informações do pai para o filho
//porque  o react é one way data binding
export default App;
