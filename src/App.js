import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Inicio } from './Components/Inicio/Inicio';
import { Perfil } from './Components/Perfil/Perfil';
import { Habilidades } from './Components/Habilidades/Habilidades';
import { Contacto } from './Components/Contacto/Contacto';
import { Proyectos } from './Components/Proyectos/Proyectos';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Inicio/>
     <Perfil/>
     <Proyectos/>
     <Habilidades/>
     <Contacto/>
    </div>
  );
}

export default App;
