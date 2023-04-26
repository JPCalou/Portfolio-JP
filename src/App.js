import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Inicio } from './Components/Inicio/Inicio';
import { Perfil } from './Components/Perfil/Perfil';
import { Habilidades } from './Components/Habilidades/Habilidades';
import { Contacto } from './Components/Contacto/Contacto';
import { Proyectos } from './Components/Proyectos/Proyectos';
import { Logo } from './Components/Logo/Logo';
import RU  from './Components/Media/reino-unido.png';
import ES  from './Components/Media/espana.png';


import { useTranslation } from "react-i18next";


function App() {
  const [t,i18n] = useTranslation("global")
  return (
    <div className="App">
      <div className='trad_box'>
      <div className="trad"  onClick ={() => i18n.changeLanguage("ES") }><img src={ES} alt={"ES"}></img></div>
      <br></br>
      <div className="trad"  onClick ={() => i18n.changeLanguage("EN") }><img src={RU} alt={"RU"}></img></div>
      </div>
      

      <Logo />
      <NavBar />
      <Inicio tr={t("Inicio.Titulo")} />
      <Perfil />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </div>
  );
}

export default App;
