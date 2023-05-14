import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    console.log(props.label)

    const placeholderModifiy = `${
        props.placeholder
    }...`

    //valor e setter
    //value atrelado ao estado
    //const [value, setValue] = useState('')

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModifiy}/>
        </div>
    )
}

export default CampoTexto