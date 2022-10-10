import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Estado from '../components/estadosequipos/Estado'
import Inventarios from '../components/inventarios/Inventarios'
import Marcas from '../components/marcasequipos/Marcas'
import Tipos from '../components/tiposequipos/Tipos'
import Navbar from '../components/UI/Navbar'
import NotFound from '../components/UI/NotFound'
import Usuarios from '../components/usuarios/Usuarios'


export default function AppRouter() {
  return (
    <div>
    <Navbar/>
    <main className='container'>
         <Routes>
        <Route path='/' element={<Inventarios/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/estado' element={<Estado/>} />
        <Route path='/tipos' element={<Tipos/>} />
        <Route path='/marcas' element={<Marcas/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    </main>
    </div>
  )
}
