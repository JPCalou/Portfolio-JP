import './Proyectos.css';
import Crescent from "../Media/Crescent.jpg";
import Currency from"../Media/Currency-app.jpg";
import Paw from "../Media/Psy-at-work.jpg"


export function Proyectos() {
  const work = [
    {
      id:"Paw",
      title: "Psy at Work",
      description: "Pagina de empresa que presta servicios de psicologia empresarial",
      technologies: "HTML,CSS,Bootstrap,SASS",
      image : Paw,
      link : 'https://jpcalou.github.io/psyatwork/'
    },
    {
      id:"Currency",
      title: "Currency App",
      description: "Conversor de divisas",
      technologies: "HTML,CSS,Javascript",
      image : Currency,
      link : 'https://jpcalou.github.io/Currency-app/'
    },
    {
      id: "Crescent",
      title: "Crescent Mall",
      description: "E-Commerce de articulos aromaticos",
      technologies: "React JS, Firebase,React-bootstrap,Sweet-Alert",
      image : Crescent,
      link : 'https://crescent-plum.vercel.app/'
    }

  ]


    return (
      <div className="Proyectos" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#01403A"
            fillOpacity="1"
            
            d="M0,192L34.3,176C68.6,160,137,128,206,133.3C274.3,139,343,181,411,218.7C480,256,549,288,617,282.7C685.7,277,754,235,823,213.3C891.4,192,960,192,1029,186.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <h2 id='proyectos'>Proyectos</h2>
        <div className="cartas">
              {
                work.map(({title,description,technologies,image,id,link})=>(
                  <a href={link}><div className='Proy' id={id} >
            <img src={image} alt={id}></img>
            <h5>{title}</h5>
            <p><span>{description}</span></p>
            <p>{technologies}</p>
          </div></a>
                ))
              }
          {/* <div className='Proy' id='Paw'>
            <img src={Paw} alt='Paw'></img>
            <h5>Psy at Work</h5>
            <p><span>Descripcion del sitio</span></p>
            <p>ReactJS, Bootstrap</p>
          </div>

          <div className='Proy' id='Currency'>
            <img src={Currency} alt='Currency'></img>
            <h5>Currency App</h5>
            <p><span>Descripcion del sitio</span></p>
            <p>ReactJS, Bootstrap</p>
          </div>

          <div className='Proy' id='Crescent'>
            <img src={Crescent} alt='Crescent'></img>
            <h5>Crescent Mall</h5>
            <p><span>Descripcion del sitio</span></p>
            <p>ReactJS, Bootstrap</p>
          </div> */}
        </div>
      </div>
    );
  }
  