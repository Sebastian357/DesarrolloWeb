// Requiere Bootstrap instalado: npm install bootstrap
// y, una sola vez en tu index.js / main.jsx:
// import "bootstrap/dist/css/bootstrap.min.css";

const ANIMACION = `
@keyframes logo-react-giro {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.logo-react-giro {
  width: 220px;
  height: 220px;
  animation: logo-react-giro 20s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .logo-react-giro { animation: none; }
}
`;

function LogoReact() {
  return (
    <svg
      className="logo-react-giro"
      viewBox="-11.5 -10.23174 23 20.46348"
      role="img"
      aria-label="Logo de React"
    >
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

const FormInicio=()=> {
  return (
    <div
      className="mt-5 d-flex flex-column align-items-center justify-content-center text-center text-white px-3"
      
    >
      <style>{ANIMACION}</style>

      <LogoReact />

      <h1 className="display-3 fw-bold mt-4 mb-0">Desarrollo Web - React JS</h1>
    </div>
  );
}

export default FormInicio;