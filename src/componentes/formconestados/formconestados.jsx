import { useState } from "react";

const FormConEstados = () => {
    const [datos,setDatos]=useState({
        nombre:'',
        email:'',
        telefono:''
    });

const handleChange=(evento)=>{
    const {name,value}=evento.target;
    setDatos({...datos,[name]:value});
    //console.log(datos);
};

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(datos);
}

    return (
        <div className="container text-center">
            <h1>Formulario con estados</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input
                    name="nombre"
                    value={datos.nombre}
                    onChange={handleChange}

                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Nombre" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div clasName="form-floating mb-3">
                <input
                    name="email"
                    value={datos.email}
                    onChange={handleChange}

                    type="text"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email" />
                <label hmtlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    name="telefono"
                    value={datos.telefono}
                    onChange={handleChange}

                    type="text"
                    className="form-control"
                    id="floatingTelefono"
                    placeholder="Telefono" />
                <label hmtlFor="floatingTelefono">Telefono</label>
            </div>
            <button
                type="submit"
                className="btn btn-primary">
                Enviar
            </button>
            </form>
        </div>

    );
};

export default FormConEstados;