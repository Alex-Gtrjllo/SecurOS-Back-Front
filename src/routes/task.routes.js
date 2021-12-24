const express = require('express');
const router = express.Router();
const validations = require('../app/validators/validations')
const yup = require('yup');

const Task = require('../models/task')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks); 
    
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})


router.post('/', validations.validate(validations.createObjectValidators), async (req, res) => {
    // validations.objectValidator(req.body);
    // validations.createObjectValidators(req.body);
    
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
        integracion_reconocimiento_facial } = req.body;

    const task = new Task({solicitud_licencia, licencia, versiones, edicion, idioma, rol, camaras_fisicas,
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
        integracion_reconocimiento_facial})
    await task.save();
    res.json({status: 'Datos guardados'});
})

router.put('/:id', async (req, res) => {
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
        integracion_reconocimiento_facial } = req.body;
    const newTask = {solicitud_licencia, licencia, versiones, edicion, idioma, rol, camaras_fisicas,
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
        integracion_reconocimiento_facial};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status: 'Task updated'});
})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task deleted'})
})

module.exports = router;
