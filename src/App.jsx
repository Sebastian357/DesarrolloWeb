import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import LoginForm from './componentes/loginform/loginform'
import FormularioUseState from './componentes/formusestate/forusestate';
import FormCondicional from './componentes/formcondicional/formcondicional';
import FormConEstados from './componentes/formconestados/formconestados';
import Formconhookform from './componentes/formconhookform/formconhookform';
import PantallaUsuarios from './componentes/pantallausuarios/pantallausuarios';
import PantallaArticulos from './componentes/pantallaarticulos/pantallaarticulos';
import NavBarPrincipal from './componentes/navbarprincipal/navbarprincipal';

function App() {


    return (
        <>
            <NavBarPrincipal />
            <Routes>
                <Route path="/" element={<FormCondicional />} />
                <Route path="/usuarios" element={<PantallaUsuarios />} />
                <Route path="/articulos" element={<PantallaArticulos />} />

            </Routes>



        </>
    )
}

export default App;
