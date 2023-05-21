import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import { v4 as uuidv4 } from 'uuid';
import hexToRgba  from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
    const css = 
    { 
        backgroundColor: hexToRgba(time.cor, 0.7)
    }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' value={time.cor} className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                        corDeFundo={time.cor}
                        key={uuidv4()} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        aoDeletar={aoDeletar}/>
                })}
            </div>
        </section>
    )
}

export default Time