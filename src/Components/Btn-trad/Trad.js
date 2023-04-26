import React from 'react';
import { useTranslation } from "react-i18next";

import './Trad.css'

export function Trad() {
  const [i18n] = useTranslation("global")
  return (
    <div>
<button  onClick={()=>i18n.useTranslation("ES")}>ES</button>  
  <br></br>
  <button onClick={()=>i18n.useTranslation("EN")}>EN</button>  
    </div>
  
  )
}

