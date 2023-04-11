import './NavBar.css'
export function NavBar (){
    return (
        <nav>
     
            <input type= 'checkbox' id='check' ></input>
            <label htmlFor='check' className='btn-menu'>
            <i className="fa-solid fa-bars " ></i>
            
            </label>
            <ul className= 'menu'>
                <li><a href='#perfil'>Perfil</a></li>
                <li><a href='#proyectos'>Proyectos</a></li>
                <li><a href='#habilidades'>Habilidades</a></li>
                <li><a href='#contacto'>Contacto</a></li>
                <li>CV</li>
     


            </ul>
        </nav>
    )
}