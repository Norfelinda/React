import '../css/mapa.css'

const Mapa = (props) =>{

    return(

        <div className="mapa">
           <h2> Ubicacion </h2>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2194088911406!2d-58.42268252549832!3d-34.598612957226464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de505d84c67e6!2sAv.%20Medrano%20951%2C%20C1179AAQ%20CABA!5e0!3m2!1ses-419!2sar!4v1699981137126!5m2!1ses-419!2sar"
         style={{width: 960, height:450, border:0 }}> </iframe>
        </div>
    )

}

export  default Mapa; 