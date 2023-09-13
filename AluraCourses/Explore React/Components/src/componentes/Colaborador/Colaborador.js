import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar(){
        aoFavoritar(colaborador.uid);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                //Isso aí! Com esta sintaxe você está pretendendo passar o resultado da função, não a função que deveria ser executada! Isto deletará o componente assim que renderizado!
                //onClick={aoDeletar(colaborador.uid)}
                onClick={() => aoDeletar(colaborador.uid)}
            />    
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador