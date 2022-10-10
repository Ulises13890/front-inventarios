import React, { useState, useEffect } from 'react'
import { GetTipoEquipos, PostTipoEquipo, PutTipoEquipo} from '../../services/TipoService'
import Modal from '../UI/Modal';

export default function Tipos() {
  const [tipos1, setTipos]=useState([]);
  const [tipo1, setTipo] = useState({
    nombre: '',
    estado:'activo'
  });

 const ListTipoEquipos=async()=>{
try{
  const resp =await GetTipoEquipos(); 
setTipos(resp.data);
 }
 catch(error){
  console.log(error);
 }
}

 useEffect(()=>{
  ListTipoEquipos();}, 
 []);

 const guardarTipoEquipo = async () => {
   try{
    const res = await PostTipoEquipo(tipo1);
    console.log(res);
    setTipo({nombre: ''});
    ListTipoEquipos();
  }catch(error){
    console.log(error);
  }
  
}

const handleChange = e => {
  setTipo({
    ...tipo1, 
    [e.target.name]: e.target.value
  })
}
const setTipoPorId = (e) => {
  console.log(e.target.id)
  const tiposFilter = tipos1.filter(t => t._id === e.target.id);
  const tipos = tiposFilter[0];
  setTipo(tipos)
  console.log(tipos)
}

const resetTipoEquipo =() => {
  setTipos({
    nombre: '',
    estado: true
  })
}

const editarTipoEquipo = async (e) => {
    try{
    const resp = await PutTipoEquipo(tipo1._id, tipo1);
    console.log(resp)   
    ListTipoEquipos()

  }catch(e){
    console.log(e)
  }}

  return (
    <div>
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal2Label">Editar TipoEquipo</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                  onClick={resetTipoEquipo}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={editarTipoEquipo}>
                  <div className="mb-3">
                    <label className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={tipo1.nombre}
                      name="nombre"
                    />
                    <select 
                      className="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={tipo1.estado}
                      onChange={handleChange}
                    >
                      <option value='inactivo'>Inactivo</option>
                      <option value='activo'>Activo</option>
                    </select>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal"
                    onClick={resetTipoEquipo}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={tipo1.nombre.length <= 0}
                    data-bs-dismiss="modal"
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        <Modal 
          titulo={'Tipo de Equipo'}
          guardar={guardarTipoEquipo}
          element={tipo1}
          change={handleChange}
        />
        <button 
          type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal" 
        >
          Nuevo
        </button>
             
        
        
       
        <table className="table">
        <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">FEcha de creacion</th>
      <th scope="col">Fecha de actualizacion</th>
    </tr>
  </thead>
          <tbody>
          {
            tipos1.map(tipo=> {
              return (
              <tr key={tipo._id}>
                
                <td>{tipo.nombre}</td>
                <td>{tipo.estado}</td>
                <td>{tipo.fecha_creacion}</td>
                <td>{tipo.fecha_actualizacion}</td>
                <td>{tipo._id}</td>
                <td>
                  <button 
                    id={tipo._id}
                    type="button" 
                    className="btn btn-success"
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal2"
                    onClick={setTipoPorId}
                  >
                    Editar
                  </button>
                  </td>
              </tr>
              )
            })
          }

        </tbody>
        </table>
      </div>
    
  )
}
