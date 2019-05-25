import React , {Component} from 'react';
import AgregarCita from './AgregarCita';
import Header from './header'

class Principal extends Component {
    state = { 
        citas:[]
     }
    crearCita = (nuevaCita) => {
        const citas = [...this.state.citas,nuevaCita]

        this.setState({citas});

        console.log(citas)
    }
    render() { 
        const titulo ="Administrador de Pacientes de Veterinaria"
        return (
          <div className="container">
           <Header titulo={titulo} />
           <div className="row">
             <div className="col-md-6">
               <AgregarCita crearCita={this.crearCita}/>
             </div>
           </div>
          </div>
        );
    }
}
 
export default Principal;