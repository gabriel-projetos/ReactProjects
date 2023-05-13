import { Fragment } from "react";
import "./Banner.css"

function Banner() {
    return (
        //serve para criar cadeia de elementos sem precisar estar dentro de uma div
        <Fragment> 
            <header className="banner">
                <img src="/imagens/banner.png" alt="O Banner principal da página do Organo"/>
            </header>
            <h1>Teste fragment</h1>
        </Fragment>
    )
}

export default Banner;