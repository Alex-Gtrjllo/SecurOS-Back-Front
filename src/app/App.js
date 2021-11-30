
import React, { Component } from "react";


import 'materialize-css';
import { Card, Select } from 'react-materialize';
import { Label } from "reactstrap";


class App extends Component {

    constructor() {
        super();
        this.state = {
            solicitud_licencia: '',
            licencia: '',
            versiones: '',
            edicion: '',
            idioma: '',
            rol: '',
            camaras_fisicas: '',
            cantidad_flujos_video: '',
            archiver: '',
            canales_audio: '',
            canales_altavoces: '',
            canales_video_mcc: '',
            canales_analitico_mcc: '',
            canales_audio_mcc: '',
            canales_dispositivos_sip: '',
            modulo_integracion_control_acceso: '',
            integracion_videowall: '',
            servidor_rtsp: '',
            servidor_onvif: '',
            securos_reports: '',
            integracion_punto_venta_atm: '',
            cantidad_servidores_activos: '',
            cantidad_servidores_failover: '',
            licencias_httpeventgate: '',
            licencias_iidk: '',
            licencias_punto_integracion: '',
            licencias_rest_api: '',
            licencia_active_mediakit: '',
            lectura_placas_baja_velocidad: '',
            lectura_placas_alta_velocidad: '',
            deteccion_marca_color: '',
            lectura_contenedores_securos: '',
            deteccion_intrusion: '',
            deteccion_humo: '',
            licencia_tracking: '',
            clasificacion_persona_vehiculo_animal: '',
            detector_casco_personas: '',
            reconocimiento_facial: '',
            deteccion_mascara_cubrebocas: '',
            integracion_reconocimiento_facial: '',
            tasks: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if (this.state._id) {
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
                    // console.log(data);
                    M.toast({ html: 'Tarea actualizada' });
                    this.setState({
                        solicitud_licencia: '', licencia: '', versiones: '', edicion: '', idioma: '', rol: '', camaras_fisicas: '',
                        cantidad_flujos_video: '',
                        archiver: '',
                        canales_audio: '',
                        canales_altavoces: '',
                        canales_video_mcc: '',
                        canales_analitico_mcc: '',
                        canales_audio_mcc: '',
                        canales_dispositivos_sip: '',
                        modulo_integracion_control_acceso: '',
                        integracion_videowall: '',
                        servidor_rtsp: '',
                        servidor_onvif: '',
                        securos_reports: '',
                        integracion_punto_venta_atm: '',
                        cantidad_servidores_activos: '',
                        cantidad_servidores_failover: '',
                        licencias_httpeventgate: '',
                        licencias_iidk: '',
                        licencias_punto_integracion: '',
                        licencias_rest_api: '',
                        licencia_active_mediakit: '',
                        lectura_placas_baja_velocidad: '',
                        lectura_placas_alta_velocidad: '',
                        deteccion_marca_color: '',
                        lectura_contenedores_securos: '',
                        deteccion_intrusion: '',
                        deteccion_humo: '',
                        licencia_tracking: '',
                        clasificacion_persona_vehiculo_animal: '',
                        detector_casco_personas: '',
                        reconocimiento_facial: '',
                        deteccion_mascara_cubrebocas: '',
                        integracion_reconocimiento_facial: '', _id: ''
                    });
                    this.fetchTask();
                });
        } else {
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
                    // console.log(data)
                    M.toast({ html: 'Datos guardados exitosamente' })
                    this.setState({
                        solicitud_licencia: '', licencia: '', versiones: '', edicion: '', idioma: '', rol: '', camaras_fisicas: '',
                        cantidad_flujos_video: '',
                        archiver: '',
                        canales_audio: '',
                        canales_altavoces: '',
                        canales_video_mcc: '',
                        canales_analitico_mcc: '',
                        canales_audio_mcc: '',
                        canales_dispositivos_sip: '',
                        modulo_integracion_control_acceso: '',
                        integracion_videowall: '',
                        servidor_rtsp: '',
                        servidor_onvif: '',
                        securos_reports: '',
                        integracion_punto_venta_atm: '',
                        cantidad_servidores_activos: '',
                        cantidad_servidores_failover: '',
                        licencias_httpeventgate: '',
                        licencias_iidk: '',
                        licencias_punto_integracion: '',
                        licencias_rest_api: '',
                        licencia_active_mediakit: '',
                        lectura_placas_baja_velocidad: '',
                        lectura_placas_alta_velocidad: '',
                        deteccion_marca_color: '',
                        lectura_contenedores_securos: '',
                        deteccion_intrusion: '',
                        deteccion_humo: '',
                        licencia_tracking: '',
                        clasificacion_persona_vehiculo_animal: '',
                        detector_casco_personas: '',
                        reconocimiento_facial: '',
                        deteccion_mascara_cubrebocas: '',
                        integracion_reconocimiento_facial: '', _id: ''
                    })
                    this.fetchTask();
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();

    }

    componentDidMount() {
        this.fetchTask();
    }

    fetchTask() {
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                this.setState({ tasks: data })
                // console.log(this.state.tasks);
            });
    }

    deleteTask(id) {
        if (confirm('¿Seguro que quieres eliminar la tarea?')) {
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    M.toast({ html: 'Licencia eliminada' })
                    this.fetchTask();
                });
        }
    }

    editTask(id) {
        fetch(`api/task/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    solicitud_licencia: data.solicitud_licencia,
                    licencia: data.licencia,
                    versiones: data.versiones,
                    edicion: data.edicion,
                    idioma: data.idioma,
                    rol: data.rol,
                    camaras_fisicas: data.camaras_fisicas,
                    cantidad_flujos_video: data.cantidad_flujos_video,
                    archiver: data.archiver,
                    canales_audio: data.canales_audio,
                    canales_altavoces: data.canales_altavoces,
                    canales_video_mcc: data.canales_video_mcc,
                    canales_analitico_mcc: data.canales_analitico_mcc,
                    canales_audio_mcc: data.canales_analitico_mcc,
                    canales_dispositivos_sip: data.canales_dispositivos_sip,
                    modulo_integracion_control_acceso: data.modulo_integracion_control_acceso,
                    integracion_videowall: data.integracion_videowall,
                    servidor_rtsp: data.servidor_rtsp,
                    servidor_onvif: data.servidor_onvif,
                    securos_reports: data.securos_reports,
                    integracion_punto_venta_atm: data.integracion_punto_venta_atm,
                    cantidad_servidores_activos: data.cantidad_servidores_activos,
                    cantidad_servidores_failover: data.cantidad_servidores_failover,
                    licencias_httpeventgate: data.licencias_httpeventgate,
                    licencias_iidk: data.licencias_iidk,
                    licencias_punto_integracion: data.licencias_punto_integracion,
                    licencias_rest_api: data.licencias_rest_api,
                    licencia_active_mediakit: data.licencia_active_mediakit,
                    lectura_placas_baja_velocidad: data.lectura_placas_baja_velocidad,
                    lectura_placas_alta_velocidad: data.lectura_placas_alta_velocidad,
                    deteccion_marca_color: data.deteccion_marca_color,
                    lectura_contenedores_securos: data.lectura_contenedores_securos,
                    deteccion_intrusion: data.deteccion_intrusion,
                    deteccion_humo: data.deteccion_humo,
                    licencia_tracking: data.licencia_tracking,
                    clasificacion_persona_vehiculo_animal: data.clasificacion_persona_vehiculo_animal,
                    detector_casco_personas: data.detector_casco_personas,
                    reconocimiento_facial: data.reconocimiento_facial,
                    deteccion_mascara_cubrebocas: data.deteccion_mascara_cubrebocas,
                    integracion_reconocimiento_facial: data.integracion_reconocimiento_facial,
                    _id: data._id
                })
            });
    }

    handleChange(e) {
        const { name, value } = e.target;
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
                    <div>
                        <div>
                            <form onSubmit={this.addTask}>
                                {/* columna */}
                                <div>
                                    <div>
                                        <Select
                                            id="1"
                                            name="solicitud_licencia"
                                            label="Escoja su tipo de solicitud de licencia"
                                            multiple={false}
                                            onChange={this.handleChange}
                                            value={this.state.solicitud_licencia}

                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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
                                            <label>Materialize Select</label>
                                        </Select>
                                        <Select
                                            id="2"
                                            name="licencia"
                                            label="Escoja su tipo de licencia"
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
                                            value={this.state.licencia}
                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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
                                            label="Escoja su versión"
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
                                            value={this.state.versiones}
                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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
                                            label="Escoge tu edición"
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
                                            value={this.state.edicion}
                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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
                                            label="Escoja su idioma"
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
                                            value={this.state.idioma}
                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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
                                            label="Escoja sus roles"
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
                                            value={this.state.rol}
                                        >
                                            <option
                                                disabled
                                                value=""
                                                defaultChecked
                                            >
                                                Escoja una opción
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

                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label>Cámaras físicas (licencia por IP)</label>
                                        <input name="camaras_fisicas" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.camaras_fisicas} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Cantidad de flujos de video (1 por imagen)</label>
                                        <input name="cantidad_flujos_video" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.cantidad_flujos_video} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Archiver (1 por servidor)</label>
                                        <input name="archiver" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.archiver} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Canales de Audio (1 por micrófono)</label>
                                        <input name="canales_audio" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.canales_audio} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Canales de Altavoces (1 por altavoz)</label>
                                        <input name="canales_altavoces" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.canales_altavoces} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Canales de Video MCC (suma de flujos de video de todos los sitios)</label>
                                        <input name="canales_video_mcc" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.canales_video_mcc} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Canales de Analíticos en MCC (suma de analíticos de todos los sitios)</label>
                                        <input name="canales_analitico_mcc" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.canales_analitico_mcc} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Canales de Audio en MCC (suma de micrófonos de todos los sitios)</label>
                                        <input name="canales_audio_mcc" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.canales_audio_mcc} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="canales_dispositivos_sip" onChange={this.handleChange} placeholder="Canales de Dispositivos SIP" value={this.state.canales_dispositivos_sip} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Módulo de Integración con Control de Acceso (1 por sistema)</label>
                                        <input name="modulo_integracion_control_acceso" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.modulo_integracion_control_acceso} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Integración con Videowall (1 por videowall)</label>
                                        <input name="integracion_videowall" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.integracion_videowall} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Servidor RTSP (1 por flujo de video)</label>
                                        <input name="servidor_rtsp" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.servidor_rtsp} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Servidor ONVIF (1 por flujo de video)</label>
                                        <input name="servidor_onvif" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.servidor_onvif} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>SecurOS Reports (1 por workstation)</label>
                                        <input name="securos_reports" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.securos_reports} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Integración con Punto de Venta o ATM (1 por terminal)</label>
                                        <input name="integracion_punto_venta_atm" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.integracion_punto_venta_atm} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Cantidad de Servidores Activos (aplica con SecurOS Clúster)</label>
                                        <input name="cantidad_servidores_activos" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.cantidad_servidores_activos} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Cantidad de Servidores de Failover (aplica con SecurOS Clúster)</label>
                                        <input name="cantidad_servidores_failover" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.cantidad_servidores_failover} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencias de HTTP Event Gate (1 por sistema externo)</label>
                                        <input name="licencias_httpeventgate" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencias_httpeventgate} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencias de IIDK (1 por sistema externo)</label>
                                        <input name="licencias_iidk" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencias_iidk} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencias de Punto de Integración (1 por sistema externo)</label>
                                        <input name="licencias_punto_integracion" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencias_punto_integracion} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencias de Rest API (1 por sistema externo por servidor)</label>
                                        <input name="licencias_rest_api" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencias_rest_api} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencia de Active Media Kit (1 por cliente)</label>
                                        <input name="licencia_active_mediakit" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencia_active_mediakit} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Lectura de Placas de Baja Velocidad (1 por flujo de video)</label>
                                        <input name="lectura_placas_baja_velocidad" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.lectura_placas_baja_velocidad} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Lectura de Placas de Alta Velocidad (1 por flujo de video)</label>
                                        <input name="lectura_placas_alta_velocidad" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.lectura_placas_alta_velocidad} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Detección de Marca, Color, Modelo para Lectura de Placas (1 por canal de LPR)</label>
                                        <input name="deteccion_marca_color" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.deteccion_marca_color} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Lectura de Contenedores-SecurOS Cargo (1 por flujo de video)</label>
                                        <input name="lectura_contenedores_securos" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.lectura_contenedores_securos} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Detección de Intrusión (1 por flujo de video)</label>
                                        <input name="deteccion_intrusion" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.deteccion_intrusion} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Detección de Humo (1 por flujo de video)</label>
                                        <input name="deteccion_humo" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.deteccion_humo} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Licencia de Tracking Kit (1 por flujo de video y canales simultáneos)</label>
                                        <input name="licencia_tracking" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.licencia_tracking} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Clasificación de Persona, Vehículo, Animal (1 por flujo de video)</label>
                                        <input name="clasificacion_persona_vehiculo_animal" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.clasificacion_persona_vehiculo_animal} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Detector de Casco en Personas (1 por flujo de video)</label>
                                        <input name="detector_casco_personas" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.descridetector_casco_personasption} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Reconocimiento Facial (1 por flujo de video)</label>
                                        <input name="reconocimiento_facial" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.reconocimiento_facial} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Detección de Máscara/Cubrebocas (1 por canal de reconocimiento facial)</label>
                                        <input name="deteccion_mascara_cubrebocas" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.deteccion_mascara_cubrebocas} type="number"></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <label>Integración de Reconocimiento Facial con Control de Acceso (1 por canal de reconocimiento facial)</label>
                                        <input name="integracion_reconocimiento_facial" onChange={this.handleChange} placeholder="Ingrese cantidad" value={this.state.integracion_reconocimiento_facial} type="number"></input>
                                    </div>
                                </div>
                                <button type="submit" className="btn light-blue darken-4">
                                    Registrar
                                </button>
                            </form>
                        </div>
                        <div className="col s7">
                            {/* <div className="input-field col s6">
                                <input name="title" onChange={this.handleChange} type="number" placeholder="Task Title" value={this.state.title}></input>
                            </div> */}
                            {/* segunda columna */}

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