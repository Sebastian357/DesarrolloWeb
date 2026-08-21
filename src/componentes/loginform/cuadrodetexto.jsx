const CuadroDeTexto=(prop)=>{
    return(
        <input className="border-3 border-info w-50 m-2"
            type={prop.Tipo}
            placeholder={prop.Texto}>

        </input>
    )
};
export default CuadroDeTexto;