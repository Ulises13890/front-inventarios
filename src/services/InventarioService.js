import { axiosConfig } from '../configuration/AxiosConfig'
//GET http://localhost:4000/inventario
//POST http://localhost:4000/inventario
//PUT http://localhost:4000/inventario

const getInventario=()=>{
    const resp=axiosConfig.get('inventario');
    return resp;
}

const createInventario=(data)=>{
    const resp=axiosConfig.post('inventario', data, {
        headers:{
            'content-type':'application/json'
        }
    });
    return resp;
}

const updateInventario=(InventarioId, data)=>{
    const resp=axiosConfig.put(`inventario/${InventarioId}`, data, {
        headers:{
            'content-type':'application/json'
        }
    });
    return resp;
}

export {getInventario, createInventario, updateInventario}