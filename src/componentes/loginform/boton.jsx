const Boton=()=>{
    const handleClick=()=>{
        alert("Hola, has hecho click en el boton")
    }
    return(
        <button 
        onClick={handleClick}
        className="
            btn 
            btn-primary 
            w-50 
            m-2">
            Ingresar
        </button>
    )
};
export default Boton;