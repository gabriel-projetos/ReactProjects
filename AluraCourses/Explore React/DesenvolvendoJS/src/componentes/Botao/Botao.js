import './Botao.css'

const Botao = (props) => {
    console.log(props)

    return (
        <button className='botao' > 
            {props.children}
        </button>
    )
}

export default Botao