import React, { Component } from 'react'
import uuid from 'uuid';
class AgregarCita extends Component {
    state = {
        error:false
    }
    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();
    agregarCita = e => {
        e.preventDefault();
    
        const mascota = this.nombreMascotaRef.current.value,
        propietario = this.propietarioRef.current.value,
        fecha = this.fechaRef.current.value,
        hora = this.horaRef.current.value,
        sintomas = this.sintomasRef.current.value;
        
        const cita = {
            id:uuid(),mascota, propietario , fecha ,hora,sintomas
        }
        
        const error = this.validarFormulario(cita);
    
        this.setState({error});

        if(!error){
          this.props.crearCita(cita);

          e.currentTarget.reset();
        }
  
    }
    validarFormulario = cita => {
        return !cita.mascota || !cita.propietario || !cita.fecha || !cita.hora || !cita.sintomas;
    }
    render() {
        const error = this.state.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5 ">
                        Agregar cita
                    </h2>
                    <form onSubmit={this.agregarCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.nombreMascotaRef} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" ref={this.propietarioRef} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" ref={this.fechaRef}/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" ref={this.horaRef}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" ref={this.sintomasRef}></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {error ? <div className='alert alert-danger text-center'>
                        Todos los campos son requeridos
                    </div>:''}
                </div>
            </div>
        );
    }
}

export default AgregarCita;
