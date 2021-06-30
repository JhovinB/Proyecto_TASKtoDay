import React, { Fragment,useState,createContext, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {


    //Obtener state del formulario
    const proyectosContext=useContext(proyectoContext);

    const {formulario,errorformulario,mostrarFormulario,
            agregarProyecto,mostrarError}=proyectosContext;


    const [proyecto, setProyecto] = useState({
        nombre:''
    });
    //Extraer nombre del proyecto
    const {nombre}=proyecto;
    
    //Lee el contenido del input
    const onChangeProyecto=e=>{
        setProyecto({...proyecto,[e.target.name] :e.target.value});
    };
    
    //Usuario envia un proyecto
    const onSubmitProyecto=e=>{
        e.preventDefault();

        // Validar los campos de proyecto
        if(nombre.trim()===''){
            mostrarError();
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);
        
        //Reiniciar el form
        setProyecto({
            nombre:''
        })


    };

    //Mostrar Formulario de Nuevo Proyecto
    const onClickFormulario=()=>{
        mostrarFormulario();
    }
    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}>
                Nuevo Proyecto
            </button>
           {formulario ?
           ( 
           <form className="formulario-nuevo-proyecto"
                 onSubmit={onSubmitProyecto}>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>):null}
            {errorformulario?
            <p className="mensaje error">
               Debes agregar un proyecto
            </p>:null}
        </Fragment>
     );
}
 
export default NuevoProyecto;