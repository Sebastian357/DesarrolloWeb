function LibrosMenor({datos}) {
  return (
    <div>
      <ul>
        {datos
          .filter(dato => dato.precio <=15000)
          .map(dato => (
            <li key={dato.id}>
              {dato.nombre} - ${dato.precio}
            </li>
          ))
        }
      </ul>
    </div>
    );
}

export default LibrosMenor;