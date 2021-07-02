import React,{useContext} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {


    //Obtener el state de proyectos
    const proyectosContext=useContext(proyectoContext);

    const {proyectoActual}= proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas }=tareasContext;

    const seleccionaProyecto = id=>{
        proyectoActual(id);//Fija un proyecto actual
        obtenerTareas(id);//Filtra las tareas
    }
    



    return (  
        <li>
            <button type="button" 
            className="btn btn-blank"
            onClick={()=>seleccionaProyecto(proyecto.id)}>
            {proyecto.nombre}
            </button>
        </li>
    );
}
 
export default Proyecto;