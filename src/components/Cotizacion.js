import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: white;
    width: 400px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 1rem;
    li{
        list-style: none;
    }
    p{
        color: #326AC0;
        font-size: 20px;
    }
    span{
        font-family: Verdana, Geneva, Tahoma, sans-serif
        color:  #0d2235;
        font-weight: bold;
        font-size: 25px;
    }
    
`;



const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;
    return ( 
          <Contenedor>
              <li><p>Precio: <span>{resultado.PRICE}</span></p></li>
              <li><p>Precio Mas alto: <span>{resultado.HIGHDAY}</span><ion-icon name="caret-up-outline" className="up"></ion-icon>
            </p>
                </li>
            <li><p>Precio mas Bajo: <span>{resultado.LOWDAY}</span><ion-icon name="caret-down-outline" className= "down"></ion-icon></p></li>
            <li><p>Variazion Ultimas Horas: <span>{resultado.CHANGE24HOUR}<ion-icon name="stats-chart-outline"></ion-icon></span></p></li>
          </Contenedor>
     );
}
 
export default Cotizacion;