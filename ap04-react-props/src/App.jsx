// rafce
import React from 'react'
import Pedido from './Pedido'
const App = () => {
  return (
    <div className='container border rounded mt-2 py-3'>

      <div className="row">
        <div className="col-12">
          <i className="fa-hippo fa-solid fa-2x"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className='display-5 text-center'>Meus pedidos</h1>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Pedido />   
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Pedido />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Pedido />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Pedido /> 
        </div>
      </div>

    </div>
  )
}

export default App
{/* <div className="row">
  <div className="col-12 col-md-3">
    <div className="py-3 bg-danger"></div>
  </div>
  <div className="col-12 col-md-9">
    <div className="py-3 bg-primary"></div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-md-4">
    <div className="bg-success py-3"></div>
  </div>
  <div className="col-12 col-md-4">
    <div className="bg-success py-3"></div>
  </div>
  <div className="col-12 col-md-4">
    <div className="bg-success py-3"></div>
  </div>
</div>

<div className="row">
  <div className="col-12">
    <div className="bg-secondary py-3"></div>
  </div>
</div> */}