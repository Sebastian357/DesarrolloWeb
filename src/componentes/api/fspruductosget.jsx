import api from "./api";
import { useState } from "react";

const FSProductosGet = () => {
    const [datos, setDatos] = useState([]);
    
    const handleClick = async () => {
        const response = await api.get("/products");
        setDatos(response.data);
        console.log(response.data);
    };




    return (
        <div>
            <h1>Get Productos</h1>



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