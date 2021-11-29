const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks); 
    
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/', async (req, res) => {
    const { solicitud_licencia, licencia, versiones, edicion, idioma, rol} = req.body;
    const task = new Task({solicitud_licencia, licencia, versiones, edicion, idioma, rol})
    await task.save();
    res.json({status: 'Task saved'});
})

router.put('/:id', async (req, res) => {
    const { solicitud_licencia, licencia, versiones, edicion, idioma, rol } = req.body;
    const newTask = {solicitud_licencia, licencia, versiones, edicion, idioma, rol};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status: 'Task updated'});
})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task deleted'})
})

module.exports = router;
