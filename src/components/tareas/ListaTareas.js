import React, { Fragment,useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition,TransitionGroup } from 'react-transition-group';


const ListaTareas = () => {

    const validateDOM = React.useRef(null)

     //Extraer si un proyecto esta activo
    const proyectosContext=useContext(proyectoContext);

    const {proyecto,eliminarProyecto}=proyectosContext;


    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto }=tareasContext;


    //Si no hay proyecto seleccionado
    if(!proyecto)return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual]=proyecto;

    const onClickEliminar=()=>{
        eliminarProyecto(proyectoActual.id);
    }
    

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2> 
            <ul className="listado-tareas">
                {/*Valida si hay tareas  */}
                {tareasproyecto.length===0 ?
                (<li className="tarea">
                    <p>No hay Tareas</p>
                </li>)
                :
                <TransitionGroup>
                    {tareasproyecto.map(tarea=>(
                        <CSSTransition  nodeRef={validateDOM} in timeout={{enter:200,exit:200}} 
                            key={tarea.id}
                            classNames="tarea">
                        <Tarea
                            tarea={tarea}
                        />
                    </CSSTransition>
                ))}
                
                </TransitionGroup>
                }
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}>
                Eliminar Proyecto &times;
            </button>
        </Fragment>

        
     );
}
 
export default ListaTareas;