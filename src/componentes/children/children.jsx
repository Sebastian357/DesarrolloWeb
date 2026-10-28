// children es la prop especial que contiene lo que escribís
// entre las etiquetas de apertura y cierre de un componente.


// Tarjeta no sabe qué va adentro: define el “marco” y children es el contenido.
// Sirve para reutilizar layouts (tarjetas, modales, botones, contenedores).
// children puede ser texto, un elemento, varios elementos o incluso otros componentes.
// Sin {children} en el JSX, el contenido que pasás se ignora.

function Tarjeta({ titulo, children }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-header fw-bold">{titulo}</div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Tarjeta;

// como se hace la llamada
/*
function App() {
  return (
    <div className="container mt-4">
      <Tarjeta titulo="Perfil">
        <p className="card-text">Nombre: Ana</p>
        <button className="btn btn-primary">Seguir</button>
      </Tarjeta>

      <Tarjeta titulo="Aviso">
        <p className="card-text mb-0">Mañana no hay clase</p>
      </Tarjeta>
    </div>
  );
}
  */


function Boton({ tipo = "primary", children }) {
  return <button className={`btn btn-${tipo}`}>{children}</button>;
}

// Uso
//<Boton>Guardar</Boton>
//<Boton tipo="danger">Cancelar</Boton>