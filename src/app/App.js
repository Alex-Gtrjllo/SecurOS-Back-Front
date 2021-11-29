
import React, { Component } from "react";


import 'materialize-css';
import { Select } from 'react-materialize';


class App extends Component {

    constructor(){
        super();
        this.state = {
            solicitud_licencia: '',
            licencia: '',
            versiones: '',
            edicion: '',
            idioma: '',
            rol: '',
            tasks: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if(this.state._id){
            fetch(`/api/task/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Tarea actualizada'});
                this.setState({solicitud_licencia: '', licencia: '', versiones: '', edicion: '', idioma: '', rol: '', _id: ''});
                this.fetchTask();
            });
        }else {
            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html: 'Task saved'})
                    this.setState({solicitud_licencia: '', licencia: '', versiones: '', edicion: '', idioma: '', rol: '', _id: ''})
                    this.fetchTask();
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();

    }

    componentDidMount(){
        this.fetchTask();
    }

    fetchTask(){
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                this.setState({tasks: data})
                console.log(this.state.tasks);
            });
    }

    deleteTask(id) {
        if (confirm('¿Seguro que quieres eliminar la tarea?')){
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Tarea eliminada'})
                this.fetchTask();
            });
        }
    }

    editTask(id) {
        fetch(`api/task/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    solicitud_licencia: data.solicitud_licencia,
                    licencia: data.licencia,
                    versiones: data.versiones,
                    edicion: data.edicion,
                    idioma: data.idioma,
                    rol: data.rol,
                    _id: data._id
                })
            });
    }

    handleChange(e) {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/* Navegacion */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">SecurOS </a>
                    </div>

                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        {/* columna */}
                                        <div className="row">
                                            {/* <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title}></input>
                                            </div> */}
                                            <Select
                                            id="1"
                                            name="solicitud_licencia"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            value={this.state.solicitud_licencia}
                                            type="text"
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}                                        
                                            >
                                                <option
                                                    disabled
                                                    value=""
                                                    selected
                                                >
                                                    Escoga su tipo de solicitud de licencia
                                                </option>
                                                <option value="Nuevo Proyecto" >
                                                    Nuevo Proyecto
                                                </option>
                                                <option value="Nueva Prueba de Concepto">
                                                    Nueva Prueba de Concepto
                                                </option>
                                                <option value="Curso/Certificación">
                                                    Curso/Certificación
                                                </option>
                                                <option value="Pendiente de Pago">
                                                    Pendiente de Pago
                                                </option>
                                                <option value="Cambio de código">
                                                    Cambio de código
                                                </option>
                                            </Select>
                                        <Select
                                            id="2"
                                            name="licencia"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}
                                        value=""
                                        >
                                            <option
                                                disabled
                                                value=""
                                            >
                                                Escoga su tipo de licencia
                                            </option>
                                            <option value="Permanente">
                                                Permanente
                                            </option>
                                            <option value="Temporal">
                                                Temporal
                                            </option>
                                            <option value="Demo Kit">
                                                Demo Kit
                                            </option>
                                        </Select>
                                        <Select
                                            id="3"
                                            name="versiones"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}
                                        value=""
                                        >
                                            <option
                                                disabled
                                                value=""
                                            >
                                                Escoga su versión
                                            </option>
                                            <option value="8.x">
                                                8.x
                                            </option>
                                            <option value="9.x">
                                                9.x
                                            </option>
                                            <option value="10">
                                                10
                                            </option>
                                            <option value="11">
                                                11
                                            </option>
                                            <option value="10.1">
                                                10.1
                                            </option>
                                            <option value="10.2">
                                                10.2
                                            </option>
                                            <option value="10.3">
                                                10.3
                                            </option>
                                            <option value="10.4">
                                                10.4
                                            </option>
                                            <option value="10.5">
                                                10.5
                                            </option>
                                            <option value="10.6">
                                                10.6
                                            </option>
                                            <option value="10.7">
                                                10.7
                                            </option>
                                            <option value="10.8">
                                                10.8
                                            </option>
                                            <option value="10.9">
                                                10.9
                                            </option>
                                            <option value="10.10">
                                                10.10
                                            </option>
                                        </Select>
                                        <Select
                                            id="4"
                                            name="edicion"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}
                                        value=""
                                        >
                                            <option
                                                disabled
                                                value=""
                                            >
                                                Escoge tu edición
                                            </option>
                                            <option value="Xpress">
                                                Xpress
                                            </option>
                                            <option value="Profesional">
                                                Profesional
                                            </option>
                                            <option value="Premium">
                                                Premium
                                            </option>
                                            <option value="Enterprise">
                                                Enterprise
                                            </option>
                                            <option value="MCC">
                                                MCC
                                            </option>
                                        </Select>
                                        <Select
                                            id="5"
                                            name="idioma"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}
                                        value=""
                                        >
                                            <option
                                                disabled
                                                value=""
                                            >
                                                Escoga su idioma
                                            </option>
                                            <option value="English">
                                                English
                                            </option>
                                            <option value="Spanish">
                                                Spanish
                                            </option>
                                            <option value="Russian">
                                                Russian
                                            </option>
                                            <option value="Japanese">
                                                Japanese
                                            </option>
                                            <option value="Turkish">
                                                Turkish
                                            </option>
                                            <option value="Ukranian">
                                                Ukranian
                                            </option>
                                            <option value="Chinese">
                                                Chinese
                                            </option>
                                            <option value="Portuguese BR">
                                                Portuguese BR
                                            </option>
                                        </Select>
                                        <Select
                                            id="6"
                                            name="rol"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            options={{
                                                classes: '',
                                                dropdownOptions: {
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                                }
                                            }}
                                        value=""
                                        >
                                            <option
                                                disabled
                                                value=""
                                            >
                                                Escoga sus roles
                                            </option>
                                            <option value="Servidor de Configuración">
                                                Servidor de Configuración
                                            </option>
                                            <option value="Servidor Periférico">
                                                Servidor Periférico
                                            </option>
                                            <option value="Servido de Failover">
                                            Servido de Failover
                                            </option>
                                        </Select>
                                        </div>                                 
                                        
                                        <div className="input-field col s12">
                                            <select>
                                                <option >Option 1</option>
                                                <option value="2">Option 2</option>
                                                <option value="3">Option 3</option>
                                            </select>
                                        </div>
                                        {/* segunda columna */}
                                        {/* <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" value={this.state.description} className="materialize-textarea"></textarea>
                                            </div>
                                        </div> */}
                                        <button type="submit" className="btn light-blue darken-4">
                                            Registrar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* aqui inicia la tabla */}
                        {/* <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>solicitud licencia</th>
                                        <th>licencia</th>
                                        <th>versiones</th>
                                        <th>edicion</th>
                                        <th>idioma</th>
                                        <th>rol</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.solicitud_licencia}</td>
                                                    <td>{task.licencia}</td>
                                                    <td>{task.versiones}</td>
                                                    <td>{task.edicion}</td>
                                                    <td>{task.idioma}</td>
                                                    <td>{task.rol}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={() => this.deleteTask(task._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                        <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                
                            </table>
                        </div> */}
                        {/* aqui finaliza la tabla  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;