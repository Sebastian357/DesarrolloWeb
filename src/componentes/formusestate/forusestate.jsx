import React, { useState } from 'react';

const FormularioUseState = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: ''
  });

  const [hoyllueve,setHoyllueve]=useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          name="nombre" 
          value={usuario.nombre} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Correo:</label>
        <input 
          type="email" 
          name="correo" 
          value={usuario.correo} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioUseState;
