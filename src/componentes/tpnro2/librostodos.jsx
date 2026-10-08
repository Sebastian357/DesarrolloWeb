const LibrosTodos = (props) => {

    return (
        <div>
            <h1>Todos los libros</h1>
            <ul>
                {
                    props.datos.map(
                        dato =>
                            <li key={dato.id}>
                                <p>{dato.nombre}</p>
                            </li>

                    )
                }
            </ul>
        </div>
    )
}

export default LibrosTodos;