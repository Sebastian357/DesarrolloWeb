import api from "./api";
import { useState } from "react";

const FSProductosGet = () => {
    const [datos, setDatos] = useState([]);
    const [id, setId] = useState();
    const [datosUnProd, setDatosUnProd] = useState({});
    
    const handleClick = async () => {
        const response = await api.get("/products");
        setDatos(response.data);
        console.log(response.data);
    };

    const handleGetXId=async()=>{
        const response = await api.get("/products"+"/"+id);
        setDatosUnProd(response.data);
    };

    const handleChange=(evento)=>{
    const {name,value}=evento.target;
    setId(value);
    console.log(id);
};





    return (
        <div>
            <h1>Get Productos</h1>

             <div className="form-floating mb-3">
                <input
                    name="id"
                    value={id}
                    onChange={handleChange}

                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Id" />
                <label htmlFor="floatingInput">Id</label>
            </div>
      

            <div className="m-1">
                <button className="btn btn-primary"
                    onClick={handleGetXId}>
                    Get xId
                </button>
            </div>
            <div className="m-1">
                <button className="btn btn-primary"
                    onClick={handleClick}>
                    Get Todos
                </button>
            </div>
            <div>
                {(datosUnProd) ?
                <p>{datosUnProd.title}</p>
                :
                <p>No existe</p>
                }

                {/* {
                    <ul>
                        {
                            datos.map(
                                dato =>
                                    <li key={dato.id}>
                                        <p>Nombre: {dato.title}</p>
                                        <p>Precio: {dato.price}</p>

                                    </li>
                            )
                        }
                    </ul>

                } */}

            </div>

        </div>

    );

};
export default FSProductosGet;