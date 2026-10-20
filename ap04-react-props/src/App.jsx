// rafce
import React from 'react'

const App = () => {
  return (
    <div className='container border rounded mt-2 py-3'>

      <div className="row">
        <div className="col-12">
          <i className="fa-hippo fa-solid fa-2x"></i>
        </div>
      </div>
      {/* mobile first */}
      <div className="row">
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
      </div>

    </div>
  )
}

export default App