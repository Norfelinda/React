const EjemploProps1 = props =>{
    return(
        <h3> hola {props.nombre} </h3>
    )

}

const EjemploProps2 = props =>{
    const {elementos} = props; // recibe barios elementos para luego debolver

    return(
        <ul>

            {elementos.map(elemento => <li key={elemento}>{elemento} </li>)}
        </ul>
    )

}

const EjemploProps3 = ({titulo,subtitulo,cuerpo}) =>{

    return(
        <div className="caja"> 
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps4 = (props) =>{
    //cuanedo e produzca el evento onChange en el input
    //ejecuto la funcion anonima que llama a la funcion
    //que enviamos en la props cambiar valor
    return(
    <label>ver en consola:<input type="text" onChange={(e)=>props.cambiarValor(e.target.value)}/></label>
    )
}

const EjemploProps5 = (props) =>{
    //define la funcion que va a manejar e evento del click
    //handleClick se usa mucho en el envio de formulario de dato
    const handleClick = e =>{
        //valido que esten pasando la props que necesito
        // si se da la condicion o la pasaron > va a "mostrar" me cliqueastes
        // sino nada o no se va aromper
        //pq en este caso el control esta dentro de la funcion 
       if (props.eventoClick){
        props.eventoClick ('Me cliquiaste')
       }
    }
    return(
        <p> <button onClick={handleClick}> Chiqueame !</button> </p>
    )
}


export{
    EjemploProps1,
    EjemploProps2,
    EjemploProps3,
    EjemploProps4,
    EjemploProps5

}