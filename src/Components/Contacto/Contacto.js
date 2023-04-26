import "./Contacto.css";
import { useTranslation } from "react-i18next";

export function Contacto() {
  const [t] = useTranslation("global")
  return (
    <div className="Contacto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#01403A"
          fillOpacity="1"
          d="M0,192L34.3,176C68.6,160,137,128,206,133.3C274.3,139,343,181,411,218.7C480,256,549,288,617,282.7C685.7,277,754,235,823,213.3C891.4,192,960,192,1029,186.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h2 id="contacto">{t("Contacto.Titulo")}</h2>
      <div className="Enlaces">
        <a href="https://wa.me/message/XPUNSJFDCX2CL1" aria-label="whatsapp">
          <i className="fa-brands fa-square-whatsapp" id="whatsapp"></i>
        </a>
        <a href="https://t.me/Juan_Pedro_Calou" aria-label="telegram">
          <i className="fa-brands fa-telegram" id="telegram"></i>
        </a>
        <a href="https://www.linkedin.com/in/juan-pedro-calou/" aria-label="linkedin">
          <i className="fa-brands fa-linkedin" id="linkedin"></i>
        </a>
        <a href="https://github.com/JPCalou" aria-label="github">
          <i className="fa-brands fa-github" id="github"></i>
        </a>
      </div>
    </div>
  );
}
