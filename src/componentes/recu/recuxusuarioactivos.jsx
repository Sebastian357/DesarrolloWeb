const RecuXUsuarioActivos=(prop)=>{

return(
<>
  <h1>Usuarios activos</h1>
  <ul>
    { 
      
      prop.datos.map(
        dato=>
          dato.activo &&
          <li key={dato.id}>
            <p> usuario: {dato.usuario}</p>
          </li>
      )
    }
  </ul>
  </>
);

   
}

export default RecuXUsuarioActivos;