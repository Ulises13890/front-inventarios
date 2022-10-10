import React, {useState, useEffect} from 'react';
import {getInventario} from '../../services/InventarioService';

export default function Invenatarios(){
    const [inventarios1, setinventarios]=useState([]);
     const listarinventarios=async()=>{
        try{
            const respus=await getInventario();
            setinventarios(respus.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        listarinventarios();
    }, []);
    return <div>
        {
            inventarios1.map( inventario=>{
                return <div key={inventario._id}>
                  <img src={inventario.foto_equipo} alt=""/>
                    <li>{inventario.modelo}</li>
                    <li>{inventario.descripcion}</li>
                    <li>{inventario.precio}</li>
                    </div>
                
            })
        }
    </div>
}