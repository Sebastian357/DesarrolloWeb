import { string } from "yup";
import api from "./api";
import { useState } from "react";

const FSProductosGet = () => {
    const [datos, setDatos] = useState([]);
    
    const handleClick = async () => {
        const response = await api.get("/products");
        setDatos(response.data);
        console.log(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdprod(value);
        console.log(value);
    };


    return (
        <div>
            <h1>Get Productos</h1>

            <input
                className="border-3 border-info w-50 m-2"
                type="number"
                name="idprod"
                value={idprod}
                onChange={handleChange}
                placeholder="ID Producto">

            </input>

            <div className="m-1">
                <button className="btn btn-primary"
                    onClick={handleClick}>
                    Get Todos
                </button>
            </div>
            <div>
                {
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

                }

            </div>

        </div>

    );

};
export default FSProductosGet;