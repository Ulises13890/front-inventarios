import { axiosConfig } from '../configuration/AxiosConfig'
const GetMarcaEquipos=()=>{
    const resp= axiosConfig.get('marca');
    return resp;
}

const PostMarcaEquipos=(data)=>{
    return axiosConfig.post('marca',data, {
        headers:{
        'content-type':'application/json'
    }})
}

const PutMarcaEquipos=(IdEquipo,data)=>{
    return axiosConfig.put('marca/'+IdEquipo,data,{
        headers:{
        'content-type':'application/json'
    }})
}

export {GetMarcaEquipos,
    PostMarcaEquipos,
    PutMarcaEquipos
}