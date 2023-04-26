import './NavBar.css'
import CV from '../Media/CV-JP.pdf'
import { useTranslation } from "react-i18next";

export function NavBar (){
    const [t] = useTranslation("global")
    return (
        <nav>
     
            <input type= 'checkbox' id='check' ></input>
            <label htmlFor='check' className='btn-menu'>
            <i className="fa-solid fa-bars " ></i>
            
            </label>
            <ul className= 'menu'>
                <li><a href='#perfil'>{t("Nav.Perfil")}</a></li>
                <li><a href='#proyectos'>{t("Nav.Proyectos")}</a></li>
                <li><a href='#habilidades'>{t("Nav.Habilidades")}</a></li>
                <li><a href='#contacto'>{t("Nav.Contacto")}</a></li>
                <li><a href={CV} download={CV}>CV</a></li>
     


            </ul>
        </nav>
    )
}