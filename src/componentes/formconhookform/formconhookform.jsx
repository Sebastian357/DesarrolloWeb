import api from "../api/api";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';

const Formconhookform = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = async (datos) => {
        try {

            const respuesta = await api.post(
                "/auth/login",
                { username: datos.usuario, password: datos.password });

            //console.log(respuesta.data);
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
            <h1>Formulario + msg con HookForm</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-floating mb-3">
                    <input
                        {...register("usuario")}

                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Usuario" />
                    <label htmlFor="floatingInput">Usuario</label>
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
                    Login
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Formconhookform;