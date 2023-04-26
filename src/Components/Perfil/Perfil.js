import "./Perfil.css";
import { useTranslation } from "react-i18next";
export function Perfil() {
  const [t] = useTranslation("global")
  return (
    <div className="Perfil">
      <h2 id="perfil">{t("Perfil.Titulo")}</h2>
      <div className="Parrafo">
        <p>
        {t("Perfil.parrafo")}
        </p>
      </div>
    </div>
  );
}
