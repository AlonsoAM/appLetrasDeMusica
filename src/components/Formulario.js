import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ({ setBusquedaLetra }) => {
  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: '',
  })
  const [error, setError] = useState(false)

  const { artista, cancion } = busqueda

  // funcion a cada inputa para leer su contenido
  const actualizarState = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
  }

  // Consultar las APIs
  const consultaInformacion = (e) => {
    e.preventDefault()

    if (artista.trim() === '' || cancion.trim() === '') {
      setError(true)
      return
    }

    // Pasar al componente principal
    setError(false)
    setBusquedaLetra(busqueda)
  }

  return (
    <>
      <div className="bg-info">
        {error ? (
          <p className="alert alert-danger text-center p-2">
            Todos los campos son obligatorios
          </p>
        ) : null}
        <div className="container">
          <div className="row">
            <form
              onSubmit={consultaInformacion}
              className="col text-white bg-transparent mb-5 pt-5 pb-2"
            >
              <fieldset>
                <div className="text-center">
                  <legend>Busca tu Canción</legend>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Artista</label>
                      <input
                        type="text"
                        className="form-control"
                        name="artista"
                        onChange={actualizarState}
                        placeholder="Nombre Artista"
                        value={artista}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Canción</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cancion"
                        onChange={actualizarState}
                        placeholder="Nombre Canción"
                        value={cancion}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary float-right">
                  Buscar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

Formulario.propTypes = {
  setBusquedaLetra: PropTypes.func.isRequired,
}

export default Formulario
