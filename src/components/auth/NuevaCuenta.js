import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    

    //State Inicio sesión
    const [usuario,setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });
    //Extraer usuario
    const {nombre,email,password,confirmar}=usuario;

    const onChange=e=>{
        setUsuario({...usuario,[e.target.name]:e.target.value})
    };

    //User quiere iniciar sesion
    const onSubmit=e=>{
        e.preventDefault();

        //Validar campos

        //Validar password min 6 caracteres
        
        //Validar 2 passwords sean iguales

        //Pasar al action
    };

    return (

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nuevo Usuario</h1>
                <form onSubmit={onSubmit}>
                <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" 
                        id="nombre" 
                        name="nombre"
                        placeholder="Ingrese Nombre"
                        value={nombre}
                        onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                        placeholder="Ingrese Email" 
                        value={email}
                        onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                        placeholder="Ingrese Password"
                        value={password}
                        onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input type="password" 
                        id="confirmar" 
                        name="confirmar"
                        placeholder="Ingrese Password"
                        value={confirmar}
                        onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrarme"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;