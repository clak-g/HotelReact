import "./Home.css"
import { FormularioReserva } from "../FormularioReserva/FormularioReserva"
import { Actividades } from "../Actividades/Actividades.js"
export function Home(){


    return(
<>
<div className="banner">
<FormularioReserva/>
</div>
<Actividades></Actividades>
</>

    )
}