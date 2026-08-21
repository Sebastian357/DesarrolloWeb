const MiLink=(prop)=>{
 return(
    <a href={prop.LinkRedireccion}
     className="
      text-decoration-underline
      fw-bold
       text-danger
       w-50
       m-3">
       {prop.Texto}
    </a>
 )
};

export default MiLink;