const FormCondicional = () => {
    const perros = [
        { id: 1, raza: "Labrador", nombre: "Max", color: "Dorado" },
        { id: 2, raza: "Caniche", nombre: "Luna", color: "Negro" },
        { id: 3, raza: "Labrador", nombre: "Rocky", color: "Crema" },
        { id: 4, raza: "Bulldog", nombre: "Milo", color: "Blanco" },
        { id: 5, raza: "Caniche", nombre: "Toby", color: "Marrón" },
        { id: 6, raza: "Caniche", nombre: "Bella", color: "Blanco" },
        { id: 7, raza: "Bulldog", nombre: "Thor", color: "Negro" },
        { id: 8, raza: "Husky", nombre: "Lola", color: "Gris" },
        { id: 9, raza: "Boxer", nombre: "Bruno", color: "Marrón" },
        { id: 10, raza: "Labrador", nombre: "Coco", color: "Marrón" },
        { id: 11, raza: "Husky", nombre: "Kira", color: "Gris" },
        { id: 12, raza: "Boxer", nombre: "Simba", color: "Blanco" },
        { id: 13, raza: "Caniche", nombre: "Zeus", color: "Negro" },
        { id: 14, raza: "Pug", nombre: "Paco", color: "Arena" },
        { id: 15, raza: "Labrador", nombre: "Bora", color: "Negro" },
        { id: 16, raza: "Pug", nombre: "Chiquita", color: "Marrón" },
        { id: 17, raza: "Husky", nombre: "Balto", color: "Negro" },
        { id: 18, raza: "Boxer", nombre: "Mia", color: "Dorado" },
        { id: 19, raza: "Bulldog", nombre: "Jack", color: "Blanco" },
        { id: 20, raza: "Pug", nombre: "Apolo", color: "Gris" }
    ];


    return (
        <div>
            <h1>Render lista completa</h1>
            <ul>
                {
                    perros.map(
                        perro =>
                            <li key={perro.id}>
                                <a>{perro.nombre} </a>
                                {perro.raza === "Caniche" ?
                                    <a>CANICHEEE </a>
                                    :
                                    <a>{perro.raza} </a>
                                }
                                <a>{perro.color}</a>
                            </li>
                    )
                }
            </ul>

            <h1>Solo perros Caniches</h1>
            {
                perros.map(
                    perro =>
                        perro.raza === "Caniche" &&
                        <li key={perro.id}>
                            <a>{perro.nombre} </a>
                            <a>{perro.raza} </a>
                            <a>{perro.color}</a>
                        </li>
                )
            }
            <h1>Solo perros de color Negro</h1>
            {
                perros.map(
                    perro =>
                        perro.color === "Negro" &&
                        <li key={perro.id}>
                          
                            <div className="card w-50" >
                                <div className="card-body">
                                    <h5 className="card-title">{perro.raza}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{perro.nombre}</h6>
                                    <p className="card-text">{perro.color}</p>
                                    <p className="card-text">El mejor perro del mundo. Le hace mal chocolate. Le gusta gusta el reggeaton</p>
                                    <a href="#" className="card-link">Datos dueño</a>
                                    <a href="#" className="card-link">Cta cte</a>
                                </div>
                            </div>
                        </li>
                )
            }
        </div>
    )
};
export default FormCondicional;