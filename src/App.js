import React from 'react'
import ReyesGodos from "./ReyesGodos" 
import "./App.css" 
import { useState} from 'react'


const App = () => {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      cantidad: 4
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      cantidad: 5
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      cantidad: 1
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      cantidad: 3
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      cantidad: 1
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      cantidad: 4
    }
  ]

  
  const [montoPagar, SetMontoPagar] = useState(0);

  return (
    <>
    <h2>Total a Pagar: ${montoPagar}</h2>
    <div className="unoDos">
      <div  className="atanagildo">
        <ReyesGodos  nombre = {reyes[0].nombre} color = {reyes[0].color} precio = {reyes[0].precio}
        cantidad = {reyes[0].cantidad} SetMontoPagar = {SetMontoPagar} imagen = "https://www.html6.es/img/rey_atanagildo.png" />
        
      </div>
   
      <div className="ervigio">
       <ReyesGodos nombre = {reyes[1].nombre} color = {reyes[1].color} precio = {reyes[1].precio} 
       cantidad = {reyes[1].cantidad} SetMontoPagar = {SetMontoPagar} imagen = "https://www.html6.es/img/rey_ervigio.png" />
       
     </div>
    </div>
    
    <div className="tresCuatro">
      <div className="ataulfo">
        <ReyesGodos nombre = {reyes[2].nombre} color = {reyes[2].color} precio = {reyes[2].precio} 
        cantidad = {reyes[2].cantidad}  SetMontoPagar = {SetMontoPagar}imagen = "https://www.html6.es/img/rey_ataulfo.png" />
         
      </div>

      <div className="leogivildo">
        <ReyesGodos nombre = {reyes[3].nombre} color = {reyes[3].color} precio = {reyes[3].precio} 
        cantidad = {reyes[3].cantidad}  SetMontoPagar = {SetMontoPagar}imagen = "https://www.html6.es/img/rey_leogivildo.png" />
        
      </div>
    </div>

   <div className="cincoSeis">
      <div className="recesvinto">
       <ReyesGodos nombre = {reyes[4].nombre} color = {reyes[4].color} precio = {reyes[4].precio} 
       cantidad = {reyes[4].cantidad}  SetMontoPagar = {SetMontoPagar}imagen = "https://www.html6.es/img/rey_recesvinto.png" />
        
      </div>

      <div className="sisebuto">
        <ReyesGodos nombre = {reyes[5].nombre} color = {reyes[5].color} precio = {reyes[5].precio} 
        cantidad = {reyes[5].cantidad} SetMontoPagar = {SetMontoPagar} imagen = "https://www.html6.es/img/rey_sisebuto.png" />
        
      </div>
   </div>




    </>
  );    
}

export default App;
