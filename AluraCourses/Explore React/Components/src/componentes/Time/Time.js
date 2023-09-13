import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import { v4 as uuidv4 } from 'uuid';
import hexToRgba  from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    const css = 
    { 
        backgroundColor: hexToRgba(time.cor, 0.7)
    }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} type='color' value={time.cor} className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            corDeFundo={time.cor}
                            key={indice} 
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time