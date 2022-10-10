import { axiosConfig } from '../configuration/AxiosConfig'
const getEstados=()=>{
    const resp= axiosConfig.get('estado');
    return resp;
}

const postEstados=(data)=>{
    return axiosConfig.post('estado',data, {
        headers:{
        'content-type':'application/json'
    }})
}

const putEstados=(IdEquipo,data)=>{
    return axiosConfig.put('estado/'+IdEquipo,data,{
        headers:{
        'content-type':'application/json'
    }})
}

export {getEstados,
    postEstados,
    putEstados
}