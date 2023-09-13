import './Campo.css'
import { useState } from 'react'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    const placeholderModifiy = `${
        placeholder
    }...`

    //valor e setter
    //value atrelado ao estado
    //const [value, setValue] = useState('')

    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }
 
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModifiy}
            />
        </div>
    )
}

export default Campo