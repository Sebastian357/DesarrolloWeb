import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Encabezado from './componentes/loginform/encabezado'
import CuadroDeTexto from './componentes/loginform/cuadrodetexto'
import Boton from './componentes/loginform/boton'
import MiLink from './componentes/loginform/milink'


function App() {
  

  return (
      <>
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
      
      </>
  )
}

export default App;
