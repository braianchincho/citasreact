import React , {Component} from 'react';
class CardCita extends Component {
    state = {  }
    eliminarCita = id => {
        this.props.eliminarCita(this.props.cita.id);
    }
    render() { 
        const cita = this.props.cita;
        return ( 
            <div className='media mt-3'>
                <div className='media-body'>
                    <p className="card-text"><span>Nombre mascota: </span>{cita.mascota}</p>
                    <p className="card-text"><span>Nombre del dueño: </span>{cita.propietario}</p>
                    <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
                    <p className="card-text"><span>Hora: </span>{cita.hora}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{cita.sintomas}</p>
                    <button onClick = {this.eliminarCita} className = "btn btn-warning">Borrar</button>
                </div>
            </div>
         );
    }
}
 
export default CardCita;