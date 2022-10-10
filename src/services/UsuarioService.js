import { axiosConfig } from '../configuration/AxiosConfig'
const getUsuarios=()=>{
    const resp= axiosConfig.get('usuario');
    return resp;
}

const postUsuarios=(data)=>{
    return axiosConfig.post('usuario',data, {
        headers:{
        'content-type':'application/json'
    }})
}

const putUsuarios=(idUsuario,data)=>{
    return axiosConfig.put('usuario/'+idUsuario,data,{
        headers:{
        'content-type':'application/json'
    }})
}

export {getUsuarios,
    postUsuarios,
    putUsuarios
}