// La comunicación hijo → padre se hace pasando una función como prop: 
// el padre define la función, se la da al hijo, y el hijo la llama cuando 
// quiere avisar algo (y puede enviarle datos como argumento).

// Los datos en React fluyen hacia abajo (padre → hijo con props), 
// pero los eventos suben (hijo → padre con funciones).
// El estado alumnos vive en el padre; el hijo no lo toca directamente, solo avisa.
// Por convención, las props de función empiezan con on (onEnviar, onClick) 
// y las funciones del padre con handle o un verbo (agregarAlumno).
// El hijo no sabe qué hace el padre con el dato: eso lo hace reutilizable.

// componente hijo
function FormularioNombre({ onEnviar }) {
  const [nombre, setNombre] = useState("");

  const manejarClick = () => {
    onEnviar(nombre); // el hijo le avisa al padre y le manda el dato
    setNombre("");
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-header fw-bold">Agregar alumno</div>
      <div className="card-body">
        <input
          className="form-control mb-2"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="btn btn-primary" onClick={manejarClick}>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default FormularioNombre;


///componente padre
function EjemploComHijoPadre() {
  const [alumnos, setAlumnos] = useState([]);

  const agregarAlumno = (nombre) => {
    if (nombre.trim() === "") return;
    setAlumnos([...alumnos, nombre]);
  };

  return (
    <div className="container mt-4">

      <FormularioNombre onEnviar={agregarAlumno} />

      <ul className="list-group">
        {alumnos.map((a, i) => (
          <li key={i} className="list-group-item">{a}</li>
        ))}
      </ul>
    </div>
  );
}
