import React ,{Component} from 'react';
import CardCita from './CardCita';
class ListaCitas extends Component {
    state = {  }
    eliminarCita = id => {
     this.props.eliminarCita(id);
    }
    render() { 
        const citas = this.props.citas;
        const titulo = citas.length > 0 ? 'Administrar tus citas':'No hay citas'; 
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{titulo}</h2>
                    <div className="lista-citas">
                        { 
                          citas.map( cita => 
                           <CardCita cita = {cita} 
                              key={cita.id}
                              eliminarCita = {this.eliminarCita}
                              />
                           )
                        }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ListaCitas;