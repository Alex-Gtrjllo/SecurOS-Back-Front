const yup = require('yup');

function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body)

            next();
        } catch (error) {
            next(error);
        }
    }
}

function createObjectValidators(data){
    const schema = yup.object().shape({
        camaras_fisicas: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        cantidad_flujos_video: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        archiver: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_audio: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_altavoces: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_video_mcc: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_analitico_mcc: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_audio_mcc: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        canales_dispositivos_sip: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        modulo_integracion_control_acceso: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        integracion_videowall: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        servidor_rtsp: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        servidor_onvif: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        securos_reports: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        integracion_punto_venta_atm: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        cantidad_servidores_activos: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        cantidad_servidores_failover: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencias_httpeventgate: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencias_iidk: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencias_punto_integracion: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencias_rest_api: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencia_active_mediakit: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        lectura_placas_baja_velocidad: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        lectura_placas_alta_velocidad: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        deteccion_marca_color: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        lectura_contenedores_securos: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        deteccion_intrusion: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        deteccion_humo: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        licencia_tracking: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        clasificacion_persona_vehiculo_animal: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        detector_casco_personas: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        reconocimiento_facial: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        deteccion_mascara_cubrebocas: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
        integracion_reconocimiento_facial: yup.number('el dato debe ser un numero').min(0, 'el numero debe ser mayor a 0').max(100).integer('el numero debe ser entero'),
    })

    schema.validateSync(data);
}

function createObjectValidators2(data){
    const { solicitud_licencia, licencia, versiones, edicion, idioma, rol, camaras_fisicas,
        cantidad_flujos_video,
        archiver,
        canales_audio,
        canales_altavoces,
        canales_video_mcc,
        canales_analitico_mcc,
        canales_audio_mcc,
        canales_dispositivos_sip,
        modulo_integracion_control_acceso,
        integracion_videowall,
        servidor_rtsp,
        servidor_onvif,
        securos_reports,
        integracion_punto_venta_atm,
        cantidad_servidores_activos,
        cantidad_servidores_failover,
        licencias_httpeventgate,
        licencias_iidk,
        licencias_punto_integracion,
        licencias_rest_api,
        licencia_active_mediakit,
        lectura_placas_baja_velocidad,
        lectura_placas_alta_velocidad,
        deteccion_marca_color,
        lectura_contenedores_securos,
        deteccion_intrusion,
        deteccion_humo,
        licencia_tracking,
        clasificacion_persona_vehiculo_animal,
        detector_casco_personas,
        reconocimiento_facial,
        deteccion_mascara_cubrebocas,
        integracion_reconocimiento_facial } = data;

    if (typeof camaras_fisicas !== 'number'){
        throw new Error('Camaras físicas debe ser un numero')
    }
}


module.exports = {
    validate,
    createObjectValidators2,
    createObjectValidators,
    
};