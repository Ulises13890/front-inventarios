import React from 'react'
import notFound from './notFound.jpg'

export default function NotFound() {
  return (
    <div><h1>Pagina no encontrada</h1>
    <img className="figure  img img-fluid d-block"
    alt=''
    src={notFound}
    />
    </div>
  )
}
