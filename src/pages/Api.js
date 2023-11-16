import '../css/api.css';
import { useEffect, useState } from 'react';  //hook, es como prendido y apagado van los dos de la mano

const Api = props =>{

    //cargando y personajes son varibles, setCargando y setPersonajes son funciones que modifican la info de esta variable
    const[cargando, setCargando] = useState(false);
    const[personajes, setPersonajes] = useState([]);

    useEffect(() =>{
            const cargarDatos = async() =>{ 
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();

            setPersonajes(res.results);  
            setCargando(false);
        }
        cargarDatos();
    }, [])

 // setcargando aranca en falso */}
 //   async asincronica y siempre va acompañada de await y devuelve una funcion */}
 //setpersonaje es la otra varible le pasa el resultado */}   
//fetch para traeer los datos nativos de JS . tambien ses puede utilizar axios(instalar dependencia)

    return(
        <> 
        <h2> hola soy la pagina  API </h2>
        {/* empiza el operador ternario en la linia de abajo, si tengo cargando lo pongo p de datos si no :va cargar todos los restos*/}
        {cargando ? <p>cargando datos....</p> :(
        <div className="personajes">

            {personajes.map(personaje =>( 
            <div className="personaje" key={personaje.id}>

                <h4>{personaje.name} </h4>
                <div className="ficha">
                    <div className="foto">
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                        <div className="datos">
                        {/*si personaje es === imprimime  humano si no otro especie */}    
                        <h6>Especie: {personaje.species === 'Human' ? 'Humano': personaje.species} </h6>
                        <h6>Vivo:{personaje.status === 'Alive' ? 'Si': 'No'} </h6>

                        </div>
                </div>
            </div>
            )) } {/*cierra el  map */}
        </div>
        )}  {/* termina el operador ternario */}
        </>
    )

}
export default Api; 