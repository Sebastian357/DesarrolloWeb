
import CuadroDeTexto from "./cuadrodetexto.jsx";
import Encabezado from "./encabezado.jsx";
import MiLink from "./milink.jsx";
import Boton from "./boton.jsx";

const LoginForm = () => {
    return (
        <div className="container text-center w-50 mt-5">
            <div class="row">
                <div class="col">
                    <Encabezado />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <CuadroDeTexto Texto="Usuario" Tipo="text" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <CuadroDeTexto Texto="Contraseña" Tipo="password" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Boton />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <MiLink Texto="Registrarse" LinkRedireccion="https://www.instagram.com" />
                    <MiLink Texto="¿Olvidaste tu contraseña?" LinkRedireccion="https://www.infobae.com" />
                </div>
            </div>
        </div>
    )
};
export default LoginForm;