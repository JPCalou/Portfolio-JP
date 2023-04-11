import "./Inicio.css";
import foto from "../Media/Foto.jpeg";

export function Inicio() {
  return (
    <div className="Inicio" id="inicio">
        <div className="imagen-titulo">
        <div className="Imagen" >
        <img className='img-inicio'src={foto} alt="foto inicio"></img>
      </div>

      <div className="Titulos" >
        <h4>Juan Pedro Calou</h4>
        <h5>Desarrollador Front-End</h5>
      </div>

        </div>
    
      <div className="separador" id="separador"></div>
    </div>
  );
}