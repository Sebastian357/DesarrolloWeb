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
import LenguajesDeProgramacion from './componentes/lenguajesdeprogramacion/lenguajesdeprogramacion';
import RecuXUsuarioActivos from './componentes/recu/recuxusuarioactivos';
import RecuXUsuarioInvitado from './componentes/recu/recuxusuarioinvitado';
import Saludo from './componentes/saludo/saludo';
import LibrosTodos from './componentes/tpnro2/librostodos';
import LibrosFantasia from './componentes/tpnro2/librosfatansia';
import Libros15000 from './componentes/tpnro2/libros15000';
import LibrosMenor from './componentes/tpnro2/tpalumno';



function App() {

    const libros = [
        { "id": 1, "nombre": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "precio": 18000 },
        { "id": 2, "nombre": "El amor en los tiempos del cólera", "autor": "Gabriel García Márquez", "genero": "Romance", "precio": 16000 },
        { "id": 3, "nombre": "It", "autor": "Stephen King", "genero": "Terror", "precio": 22000 },
        { "id": 4, "nombre": "El resplandor", "autor": "Stephen King", "genero": "Terror", "precio": 19000 },
        { "id": 5, "nombre": "Misery", "autor": "Stephen King", "genero": "Suspenso", "precio": 17000 },
        { "id": 6, "nombre": "Fundación", "autor": "Isaac Asimov", "genero": "Ciencia ficción", "precio": 15000 },
        { "id": 7, "nombre": "Yo, robot", "autor": "Isaac Asimov", "genero": "Ciencia ficción", "precio": 14000 },
        { "id": 8, "nombre": "Ficciones", "autor": "Jorge Luis Borges", "genero": "Fantasía", "precio": 13000 },
        { "id": 9, "nombre": "El Aleph", "autor": "Jorge Luis Borges", "genero": "Fantasía", "precio": 12500 },
        { "id": 10, "nombre": "Dune", "autor": "Frank Herbert", "genero": "Ciencia ficción", "precio": 21000 }
    ];


    return (
        <>
            <LibrosMenor datos={libros} />



        </>
    )
}

export default App;


/*
<Routes>
                <Route path="/" element={<FormCondicional />} />
                <Route path="/usuarios" element={<PantallaUsuarios />} />
                <Route path="/articulos" element={<PantallaArticulos />} />

            </Routes>
*/