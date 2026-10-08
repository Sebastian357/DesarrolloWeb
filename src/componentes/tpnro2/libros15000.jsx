const Libros15000=(props)=>{
    return(
        <div>
            <h1>Libros menos de 15000</h1>
            <ul>
                {
                    props.datos.map(
                        dato=>
                        dato.precio<=15000 &&
                        <li key={dato.id}>
                           <p>{dato.nombre}</p> 
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Libros15000;