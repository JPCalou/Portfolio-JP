import "./Habilidades.css";

export function Habilidades() {
  return (
    <div>
      <div className="separador-h" id="separador"></div>
      <h2 id="habilidades">Habilidades</h2>
      <div className="habilidades">

        <div >
          <i className="fa-brands fa-html5" id="html" name="html"></i>
          <label for="html">HTML </label>
        </div>

        <div >
        <i className="fa-brands fa-css3-alt" id="css" name="css"></i>
          <label for="css"> CSS</label>
          
        </div>
        <div >
        <i className="fa-brands fa-square-js" id="js" name="js"></i>
          <label for="js">JavaScript</label>
          
        </div>
        <div >
        <i className="fa-brands fa-react" id="react" name="react"></i>
          <label for="react">React JS</label>
          
        </div>
        <div >
        <i className="fa-brands fa-wordpress" id="wp" name="wp"></i>
          <label for="wp">Wordpress</label>
          
        </div>
        <div >
        <i className="fa-brands fa-github" id="github" name="github"></i>
          <label for="github">Github</label>
         
        </div>
        <div >
        <i className="fa-brands fa-bootstrap" id="bootstrap" name="bootstrap"></i>
          <label for="bootstrap">Bootstrap</label>
         
        </div>
      </div>
      
    </div>
  );
}
