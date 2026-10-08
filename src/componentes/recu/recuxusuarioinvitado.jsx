const RecuXUsuarioInvitado=(prop)=>{

return(
<>
  <h1>Usuarios invitados</h1>
  <ul>
    {
      prop.datos.map(
        dato=>
          dato.perfil==="invitado" &&
          <li key={dato.id}>
            <p> usuario: {dato.usuario}</p>
          </li>
      )
    }
  </ul>
  </>
);

   
}

export default RecuXUsuarioInvitado;