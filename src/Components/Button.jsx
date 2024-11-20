import React from 'react'

const Button=({
  href,
 label,
  target='_self',
 icon,
 classes,
})=>{
    if(href){
    return (
      <div className="best-btn">
          <a href={href} target={target} className= {`btn-primary  flex items-center  ${classes}`}>{label}{icon ?
      <span className="material-symbols-outlined">{icon}</span>:undefined}</a>
      </div>
    )
  }else{
    return(
      
      <div className="best-btn">
      <button className={`btn-primary flex  items-center ${classes}`}>{label}{icon ?
        <span className="material-symbols-outlined">{icon}</span>:undefined}</button>
        </div>
    )
    
  }
}

const ButtonOutline=({
  href,
 label,
  target='_self',
 icon,
 classes,
})=>{
    if(href){
    return (
      
      <div className="best-btn1">
          <a href={href} target={target}  className={`btn-outline flex items-center  ${classes}`}>{label}{icon?
      <span className="material-symbols-outlined">{icon}</span>:undefined}</a>
      </div>

    )
  }else{
    return(
      <div className="best-btn1">
      <button id="btn" className={`btn-outline flex items-center ${classes}`}>{label}{icon?
        <span className="material-symbols-outlined">{icon}</span>:undefined}</button>
        </div>
    )
    
  }
}
export {Button,ButtonOutline}; 

