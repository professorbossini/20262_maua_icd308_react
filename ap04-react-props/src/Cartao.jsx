// rafce
import React from 'react'

const Cartao = ({ cabecalho, children }) => {
  // const cabecalho = props.cabecalho
  // const children = props.children
  // const { cabecalho, children } = props
  return (
    <div className='card'>
      <div className="card-header text-muted">{cabecalho}</div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Cartao

