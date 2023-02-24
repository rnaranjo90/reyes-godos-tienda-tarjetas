import React from 'react'
import "./App.css" 
import { useState} from 'react'

export default function ReyesGodos({nombre, color, precio, imagen, cantidad, SetMontoPagar}) {

  let [cantidadRey, SetCantidadRey] = useState(cantidad);
  


  const comprar = (e) => {
    SetMontoPagar((f) => f + precio); 
    SetCantidadRey(cantidadRey= cantidadRey - 1);

    if (cantidadRey == 0) {
      e.target.parentNode.style.display = "none";
    }    
  }

  return (
    <div className= "placaRey" style = {{backgroundColor: color}}>
      <h3>{nombre}</h3> 
      <h2 className="cantidad">{cantidadRey}</h2>      
      <img src={imagen}></img>
      <p>Precio</p>      
      <p>$ {precio}</p>
      <button onClick={comprar} >Comprar</button>     
    </div>
  )
}

ReyesGodos.defaultProps = {
         
}



