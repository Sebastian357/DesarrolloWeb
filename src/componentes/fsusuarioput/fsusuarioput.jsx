import api from "../api/api";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';

const FsUsuarioPut = () => {
    const { register, handleSubmit } = useForm();
    const handlePost = async (datos) => {
        try {

            const respuesta = await api.put(
                "/users"+"/"+datos.id,
                { id:0,
                    username: datos.username,
                    email:datos.email,
                     password: datos.password });

            console.log(respuesta);
            // 
            toast.success('🦄 Wow so easy!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
               // transition: Bounce,
            });

        }
        catch (error) {
            //console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo logear",
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
        }
    }


    return (
        <div className="container text-center">
            <h1>Usr Put con HookForm</h1>
            <form onSubmit={handleSubmit(handlePost)}>
                <div className="form-floating mb-3">
                    <input
                        {...register("id")}

                        type="text"
                        className="form-control"
                        id="floatingId"
                        placeholder="IdUsuario" />
                    <label htmlFor="floatingId">Id Usuario</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        {...register("username")}

                        type="text"
                        className="form-control"
                        id="floatingUN"
                        placeholder="Nombre" />
                    <label htmlFor="floatingUN">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        {...register("email")}

                        type="text"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="Email" />
                    <label htmlFor="floatingEmail">Email</label>
                </div>


                <div className="form-floating mb-3">
                    <input
                        {...register("password")}

                        type="text"
                        className="form-control"
                        id="floatingPass"
                        placeholder="Password" />
                    <label hmtlFor="floatingPass">Password</label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                    Registrar
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FsUsuarioPut;