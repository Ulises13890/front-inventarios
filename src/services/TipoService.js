import { axiosConfig } from '../configuration/AxiosConfig'
const GetTipoEquipos=()=>{
    const resp= axiosConfig.get('tipo');
    return resp;
}

const PostTipoEquipo=(data)=>{
    return axiosConfig.post('tipo',data, {
        headers:{
        'content-type':'application/json'
    }})
}

const PutTipoEquipo=(IdEquipo,data)=>{
    return axiosConfig.put('tipo/'+IdEquipo,data,{
        headers:{
        'content-type':'application/json'
    }})
}

export {GetTipoEquipos,
    PostTipoEquipo,
    PutTipoEquipo
}