import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Tarea = ({tarea}) => {



    //Extraer si un proyecto esta activo
    const proyectosContext=useContext(proyectoContext);

    const {proyecto}=proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea,obtenerTareas,
            cambiarEstadoTarea,guardarTareaActual}=tareasContext;


    //Extraer el proyecto
    const[proyectoActual]=proyecto;

    //Usuario presiona btn eliminar tarea
    const tareaEliminar=id=>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    //Modifica el estado de las tareas
    const cambiarEstado=tarea=>{

        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        cambiarEstadoTarea(tarea);
    }

    //Agrega un tarea actual cuando el usuario desea editar 
    const seleccionarTarea=tarea=>{
        guardarTareaActual(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ?
                (<button 
                    type="button"
                    className="completo"
                    onClick={()=>cambiarEstado(tarea)}>
                    Completo
                </button>)
                :(<button
                    type="button"
                    className="incompleto"
                    onClick={()=>cambiarEstado(tarea)}>
                    Incompleto
                </button>)}
            </div>
            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={()=>seleccionarTarea(tarea)}>
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=>tareaEliminar(tarea.id)}>
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;