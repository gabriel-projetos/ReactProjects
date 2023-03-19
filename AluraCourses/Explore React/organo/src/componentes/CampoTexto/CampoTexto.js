import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props.label)

    const placeholderModifiy = `${
        props.placeholder
    }...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModifiy}/>
        </div>
    )
}

export default CampoTexto