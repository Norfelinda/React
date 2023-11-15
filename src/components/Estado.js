import { useState } from "react";
import '../css/estado.css'

function EjemploEstado(props){

    //cuando se escribe esta linea se importa solo
    const [counter, setCounter] = useState(0);
    return(
        <div className="contenedor">
            <h3> {`contador:  ${counter}`} </h3>

            <div className="buttonGroup">
                <button className="success" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="error" onClick={() => setCounter(counter -1 )}> - </button>
            </div>
        </div>
    )
}  

    export {
        EjemploEstado
    }