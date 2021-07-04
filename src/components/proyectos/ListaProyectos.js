import React ,{useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition,TransitionGroup } from 'react-transition-group';



const ListaProyectos = () => {

    const validateDOM = React.useRef(null)

    const proyectosContext=useContext(proyectoContext);

    const {proyectos,obtenerProyectos}=proyectosContext;
    
    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])

    //Si hay proyectos 
    if(proyectos.length===0)return <p>No hay proyectos, comienza creando uno</p>;
 

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto=>(
                   <CSSTransition 
                    nodeRef={validateDOM} in timeout={{enter:200,exit:200}}
                    key={proyecto.id}
                    classNames="proyecto">
                        <Proyecto
                            proyecto={proyecto}
                        />
                   </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListaProyectos;