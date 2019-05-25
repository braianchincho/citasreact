import React , {Component} from 'react';
import AgregarCita from './AgregarCita';
import Header from './header'
import ListaCitas from './ListaCitas';

class Principal extends Component {
    state = { 
        citas:[]
     }
    componentDidMount(){
        const citasString = localStorage.getItem('citas');
        if(citasString)
          this.setState({citas:JSON.parse(citasString)});
    }
    componentDidUpdate(){
        localStorage.setItem('citas',JSON.stringify(this.state.citas));
    }
    crearCita = (nuevaCita) => {
        const citas = [...this.state.citas,nuevaCita]

        this.setState({citas});

        console.log(citas)
    }
    eliminarCita = id => {
        const citas = [...this.state.citas];
        const citasFilter = citas.filter(element => element.id !== id);
        this.setState({citas:citasFilter})
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
                <div className="col-md-6">
                <ListaCitas citas={this.state.citas} eliminarCita = {this.eliminarCita}/>
                </div>
            </div>
          </div>
        );
    }
}
 
export default Principal;