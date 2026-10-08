const LibrosFantasia=(props)=>{

    return(
        <div>
            <h1>
                LibrosFantasia
            </h1>
            <ul>
                {
                    props.datos.map(
                        dato=> 
                        dato.genero==="Fantasía" &&
                        <li key={dato.id}>
                            <p>{dato.nombre}</p>
                        </li>
                    )
                }
            </ul>
        </div>

    )
};

export default LibrosFantasia;