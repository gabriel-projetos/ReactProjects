import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import { v4 as uuidv4 } from 'uuid';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={uuidv4()} 
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time