import React,{useContext,useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext=useContext(proyectoContext);

    const {proyecto}=proyectosContext;

     //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada ,errortarea,agregarTarea,
            validarTarea,obtenerTareas }=tareasContext;
    
    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
       if(tareaseleccionada!==null){
            setTarea(tareaseleccionada);
       }else{
            setTarea({
               nombre:''
           })
       }
    }, [tareaseleccionada]);

    //State del formulario

    const [tarea,setTarea]=useState({
        nombre:''
    })
    //Destructuring del nombre del proyecto
    const {nombre}=tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto)return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual]=proyecto;

    //Lee los valores del formulario
    const handleChange=e=>{
        setTarea({...tarea,[e.target.name]:e.target.value});
    }

    const onSubmit=e=>{
        e.preventDefault();

        //Validar
        if(nombre.trim()===''){
            validarTarea();
            return;
        }
        //Pasar la validación


        //Agregar la nueva tarea al state de tareas
        tarea.proyectoId=proyectoActual.id;
        tarea.estado=false;
        agregarTarea(tarea);

        //Obtener y filtra las tareas del proyecto
        obtenerTareas(proyectoActual.id);

        //Reiniciar el form
        setTarea({
            nombre:''
        })

    }



    return ( 
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea.."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 
                            'Editar Tarea':'Agregar Tarea' }                        
                    />
                </div>
            </form>
            {errortarea?
            <p className="mensaje error">
                El nombre de la tarea es obligatorio
            </p>:null}
        </div>
     );
}
 
export default FormTarea;