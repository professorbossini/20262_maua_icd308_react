// rafce
import React from 'react'

const Pedido = () => {
  return (
    <div className="card">
      <div className="card-header text-muted">22/04/2025</div>
      <div className="card-body d-flex">
        <div className='d-flex align-items-center'>
          <i className="fa-solid fa-book fa-2x"></i>
        </div>
        <div className='border flex-grow-1 ms-2'>
          <h4 className='text-center'>Livro</h4>
          <p className='text-center'>Concrete Mathematics - Donald Knuth</p>
        </div>
      </div>
    </div>
  )
}

export default Pedido