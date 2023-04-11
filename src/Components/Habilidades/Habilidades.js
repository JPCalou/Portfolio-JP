import './Habilidades.css'

export function Habilidades (){
    return(
        <div >
            <div className='separador-h' id='separador' ></div>
            <h2 id='habilidades'>Habilidades</h2>
            <div className='habilidades'>
            <i className="fa-brands fa-html5" id='html'></i>
            <i className="fa-brands fa-css3-alt" id='css'></i>
            <i className="fa-brands fa-square-js" id='js'></i>
            <i className="fa-brands fa-react" id='react'></i>
            <i className="fa-brands fa-wordpress" id='wp'></i>
            <i className="fa-brands fa-github" id='github'></i>
            <i className="fa-brands fa-bootstrap" id='bootstrap'></i>
             </div>
             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0455bf" fill-opacity="1" d="M0,192L34.3,176C68.6,160,137,128,206,133.3C274.3,139,343,181,411,218.7C480,256,549,288,617,282.7C685.7,277,754,235,823,213.3C891.4,192,960,192,1029,186.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
        </div>
    )
}