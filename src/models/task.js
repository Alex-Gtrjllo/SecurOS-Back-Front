const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskScheema = new Schema({
    solicitud_licencia: { type: String, required: true},
    licencia: {type: String, required: true},
    versiones: { type: String, required: true},
    edicion: {type: String, required: true},
    idioma: { type: String, required: true},
    rol: {type: String, required: true},
    camaras_fisicas: { type: Number, required: false},
    cantidad_flujos_video: {type: Number, required: false},
    archiver: { type: Number, required: false},
    canales_audio: {type: Number, required: false},
    canales_altavoces: { type: Number, required: false},
    canales_video_mcc: { type: Number, required: false},
    canales_analitico_mcc: {type: Number, required: false},
    canales_audio_mcc: { type: Number, required: false},
    canales_dispositivos_sip: {type: Number, required: false},
    modulo_integracion_control_acceso: { type: Number, required: false},
    integracion_videowall: { type: Number, required: false},
    servidor_rtsp: {type: Number, required: false},
    servidor_onvif: { type: Number, required: false},
    securos_reports: {type: Number, required: false},
    integracion_punto_venta_atm: { type: Number, required: false},
    cantidad_servidores_activos: { type: Number, required: false},
    cantidad_servidores_failover: {type: Number, required: false},
    licencias_httpeventgate: { type: Number, required: false},
    licencias_iidk: {type: Number, required: false},
    licencias_punto_integracion: { type: Number, required: false},
    licencias_rest_api: { type: Number, required: false},
    licencia_active_mediakit: {type: Number, required: false},
    lectura_placas_baja_velocidad: { type: Number, required: false},
    lectura_placas_alta_velocidad: {type: Number, required: false},
    deteccion_marca_color: { type: Number, required: false},
    lectura_contenedores_securos: { type: Number, required: false},
    deteccion_intrusion: {type: Number, required: false},
    deteccion_humo: { type: Number, required: false},
    licencia_tracking: {type: Number, required: false},
    clasificacion_persona_vehiculo_animal: { type: Number, required: false},
    detector_casco_personas: { type: Number, required: false},
    reconocimiento_facial: {type: Number, required: false},
    deteccion_mascara_cubrebocas: { type: Number, required: false},
    integracion_reconocimiento_facial: {type: Number, required: false}
    

})

module.exports = mongoose.model('Task', TaskScheema);