import React, { useState, useEffect } from 'react'
import { getEstados,postEstados, putEstados} from '../../services/EstadoService'
import Modal from '../UI/Modal';

export default function Estado() {
  const  [Estados1, setEstados]=useState([]);
  const [Estado1, setEstado] = useState({
    nombre: '',
    estado:'activo'
  });

 const ListEstado=async()=>{
try{
  const resp =await getEstados(); 
setEstados(resp.data);
 }
 catch(error){
  console.log(error);
 }
}

 useEffect(()=>{
  ListEstado();}, 
 []);

 const guardarEStado = async () => {
   try{
    const res = await postEstados(Estado1);
    console.log(res);
    setEstado({nombre: ''});
    ListEstado();
  }catch(error){
    console.log(error);
  }
  
}

const handleChange = e => {
  setEstado({
    ...Estado1, 
    [e.target.name]: e.target.value
  })
}
const setEstadoPorId = (e) => {
  console.log(e.target.id)
  const EstadoFilter = Estados1.filter(t => t._id === e.target.id);
  const Estados = EstadoFilter[0];
  setEstado(Estados)
  console.log(Estados)
}

const resetEstadoEquipo =() => {
  setEstados({
    nombre: '',
    estado: true
  })
}

const editarEStado = async (e) => {
    try{
    const resp = await putEstados(Estado1._id, Estado1);
    console.log(resp)   
    ListEstado()

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
                  onClick={resetEstadoEquipo}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={editarEStado}>
                  <div className="mb-3">
                    <label className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={Estado1.nombre}
                      name="nombre"
                    />
                    <select 
                      className="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={Estado1.estado}
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
                    onClick={resetEstadoEquipo}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={Estado1.nombre.length <= 0}
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
          guardar={guardarEStado}
          element={Estado1}
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
           Estados1.map(tipo=> {
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
                    onClick={setEstadoPorId}
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
