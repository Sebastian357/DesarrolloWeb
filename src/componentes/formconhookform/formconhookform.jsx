import { useForm } from "react-hook-form"

const Formconhookform = () => {
    const { register, handleSubmit } = useForm();

    

    return(
        <div className="container text-center">
            <h1>Formulario con HookForm</h1>
            <form onSubmit={handleSubmit((datos)=>{console.log(datos)})}>
            <div className="form-floating mb-3">
                <input
                    {...register("nombre")}
                    
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Nombre" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div clasName="form-floating mb-3">
                <input
                    {...register("email")}

                    type="text"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email" />
                <label hmtlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    {...register("telefono")}

                    type="text"
                    className="form-control"
                    id="floatingTelefono"
                    placeholder="Telefono" />
                <label hmtlFor="floatingTelefono">Telefono</label>
            </div>
            <button
                type="submit"
                className="btn btn-primary">
                Enviar
            </button>
            </form>
        </div>
    );
};

export default Formconhookform;