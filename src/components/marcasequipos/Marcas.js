import React, { useState, useEffect } from 'react'
import { GetMarcaEquipos,PostMarcaEquipos, PutMarcaEquipos} from '../../services/MarcaService'
import Modal from '../UI/Modal';

export default function Marcas() {
  const  [Marcas1, setMarcas]=useState([]);
  const [Marca1, setMarca] = useState({
    nombre: '',
    estado:'activo'
  });

 const ListMarcaEquipos=async()=>{
try{
  const resp =await GetMarcaEquipos(); 
setMarcas(resp.data);
 }
 catch(error){
  console.log(error);
 }
}

 useEffect(()=>{
  ListMarcaEquipos();}, 
 []);

 const guardarMarcaEquipo = async () => {
   try{
    const res = await PostMarcaEquipos(Marca1);
    console.log(res);
    setMarca({nombre: ''});
    ListMarcaEquipos();
  }catch(error){
    console.log(error);
  }
  
}

const handleChange = e => {
  setMarca({
    ...Marca1, 
    [e.target.name]: e.target.value
  })
}
const setMarcaPorId = (e) => {
  console.log(e.target.id)
  const MarcasFilter = Marcas1.filter(t => t._id === e.target.id);
  const Marcas = MarcasFilter[0];
  setMarca(Marcas)
  console.log(Marcas)
}

const resetMarcaEquipo =() => {
  setMarcas({
    nombre: '',
    estado: true
  })
}

const esitarMarcaEquipo = async (e) => {
    try{
    const resp = await PutMarcaEquipos(Marca1._id, Marca1);
    console.log(resp)   
    ListMarcaEquipos()

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
                  onClick={resetMarcaEquipo}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={esitarMarcaEquipo}>
                  <div className="mb-3">
                    <label className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={Marca1.nombre}
                      name="nombre"
                    />
                    <select 
                      className="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={Marca1.estado}
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
                    onClick={resetMarcaEquipo}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={Marca1.nombre.length <= 0}
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
          guardar={guardarMarcaEquipo}
          element={Marca1}
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
           Marcas1.map(tipo=> {
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
                    onClick={setMarcaPorId}
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
    /*<div>


      <h1>Modulo Tipo de Equipos</h1>
      <h3>editar entradas.</h3>
      <h4>Por favor introduzca uno de los campos de la tabla para editar o presione nuevo para agregar uno nuevo</h4>
      <div className="modal-body">
                <form onSubmit={guardarMarcaEquipo}>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="recipient-name"
                      onChange={handleChange}
                      value={Marca1.nombre}
                      name="nombre"
                    />
                    <select 
                      class="form-select" 
                      aria-label="Default select example"
                      name="estado"
                      value={Marca1.estado}
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
                    onClick={resetMarcaEquipo}
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={Marca1.nombre.length <= 0}
                    data-bs-dismiss="modal"
                  >
                    Enviar
                  </button>
                </form>
                </div>
      <Modal 
          titulo={'Tipo de Equipo'}
          guardar={esitarMarcaEquipo}
          element={Marca1}
          change={handleChange}
        />}
        
      <table className='table'>
       <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">FEcha de creacion</th>
      <th scope="col">Fecha de actualizacion</th>
    </tr>
  </thead>
    {
     Marcas1.map(tipo=>{
        return <tr key={tipo._id}><td>{tipo.nombre}</td>
        <td>{tipo.estado}</td>
        <td>{tipo.fecha_creacion}</td>
        <td>{tipo.fecha_actualizacion}</td>
        <button
        id={tipo._id} 
          type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal" 
        >
          Editar
        </button>
        </tr>
      })
    }
    </table>
    </div>*/
  )
}
