function LenguajesDeProgramacion() {
    const lenguajes = [
        { id: 1, nombre: 'JavaScript' },
        { id: 2, nombre: 'Python' },
        { id: 3, nombre: 'TypeScript' },
        { id: 4, nombre: 'Java' }];
    return (
        <div>
            <h2>Lenguajes de Programación</h2>
            <ul> {lenguajes.map(
                (lenguaje) => (
                    < li key = { lenguaje.id } > { lenguaje.nombre } </li> 
))}
        </ul>
 </div >
);
};
export default LenguajesDeProgramacion; 
