import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    
      <Link to='/'
      className='navbar-brand'
      tabIndex={0}
      aria-label='ir a Inicio'>inventario</Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink to='/tipos'
      className='nav-link'
      tabIndex={0}
      aria-label='ir a Tipos de equipo'>Tipos</NavLink>
          <NavLink to='/estado'
      className='nav-link'
      tabIndex={0}
      aria-label='ir a Estados de equipo'>Estados</NavLink>
          <NavLink to='/marcas'
      className='nav-link'
      tabIndex={0}
      aria-label='ir a Marcas de equipo'>Marcas</NavLink>
          <NavLink to='/usuarios'
      className='nav-link'
      tabIndex={0}
      aria-label='ir a usuarios de equipo'>Usuarios</NavLink>
       </div>
      </div>
    </div>
  </nav>
  )
}
