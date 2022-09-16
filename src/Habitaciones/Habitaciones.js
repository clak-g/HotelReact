import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion"
import { useEffect, useState } from "react" //HOOKS
export function Habitaciones(){



    //USANDO EL USESTATE (FUNCION ESPECIAL PARA CREAR UNA VARIABLE GLOBAL DENTRO DEL COMPONENTE)
    const [estadoCarga,setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)

    //usando el useEffect
    //funcion que controla el render(pintar) de un componente
    useEffect(function(){

        ServicioHabitacion()
        .then(function(){
                setHabitaciones(respuesta)

                setEstadoCarga(false)

                            })

    },[])


    //evaluando la carga para renderizar

    if(estadoCarga){
        return(

            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{
        <div>
            {
                habitaciones.datos.map(function(habitacion){
                    return(
                        <div> 
                            <h1>{habitacion.nombre}</h1>
                            <img src= {habitacion.imagenes[0]}></img>
                        </div>
                    )

                })
            }
        </div>
    }

    

    
    
}