function Saludo({ esta }) {
    return (
        <div>
        <h1>QQQ</h1>
            {
                esta ?
                    <h1>¡Bienvenido de vuelta!</h1> :
                    <h1>Por favor, inicia sesión</h1>
            }
        </div>
    );
}

export default Saludo;