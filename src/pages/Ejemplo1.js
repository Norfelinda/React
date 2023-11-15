import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";


const nombre2= 'maria'
const frutas= ['manzana','banana','palta','sandia']
const verdura= ['papa','zanahoria','acelga']

const mostrarValor = valor =>{
  console.log(valor)
}

const Ejemplo1 = (props) =>{

    return(
        <div> 
        <h2>Ejemplos de PROPS </h2>
        {/**propiedad simple y reutilizable */}
        <EjemploProps1  nombre = 'sonia'/>
        <EjemploProps1  nombre = {nombre2} />
        <EjemploProps1 />   {/**solo muestra un hola */}

          {/**listados de elementos -11 pdf */}
        <EjemploProps2  elementos = {frutas} />
        <EjemploProps2  elementos = {verdura} />

          {/**multiples propiedades y un destructing */}
          <h4>Ejemplo del modelo de noticia </h4>
        <EjemploProps3  titulo = "Futbol Messi" subtitulo="Messi gano otra" cuerpo="gano la copa del mundo .." />
        {/** si o si necesita pasarle en este caso mostrarValor */} 
        <EjemploProps4 cambiarValor={mostrarValor}  />
        {/** si escribo asi sin el manejdor, cuando completo cuando completo me va tirrar un error */}
        <EjemploProps4 />

         {/** pasamos una funcion vacia */}
         <EjemploProps4 cambiarValor={() =>{}}/>

        <EjemploProps5 />
        <EjemploProps5 eventoClick={mostrarValor} />


        </div>
    
    )
}

export default Ejemplo1;