import "./Inicio.css";
import foto from "../Media/Foto.avif";
import logo from '../Media/Logo-correcto.png';
import { useTranslation } from "react-i18next";

export function Inicio() {
  const [t] = useTranslation("global")
  return (
    <div className="Inicio" id="inicio">
      <div className="imagen-titulo">
      
        <img className="img-inicio" src={foto} alt="foto inicio" fetchpriority="high"></img>

        <div className="Titulos">
          <img src={logo} alt="logo" id="Logo"></img>
          <h4>Juan Pedro Calou</h4>
          <h5>{t("Inicio.Titulo")}</h5>
        </div>
      </div>

      <div className="separador" id="separador"></div>
    </div>
  );
}
