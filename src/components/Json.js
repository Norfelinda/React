
import alumnos from '../data/Alumnos.json';

const Json = props =>{
    return(
        <>
        <h2> ejemplo de datos de Json </h2>
        {/* ul seria el elemento padre, li elemento que se repite es dicir elemento pequeño */}
        <ul> 
            {alumnos.map(alumno => (
                <li>Nombre: {alumno.nombre} {alumno.apellido} - Edad: ({alumno.edad}) </li>

            ))}

        </ul>

        </>
    )
}

export default Json;