const Task = require('../models/Task');


const getALLTasks = async (req, res) => {//requisição para trazer as tarefas e renderizar na pagina html

    try {
        const taskList = await Task.find();
        res.render("index", { taskList });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

};

const createTask = async (req, res) => {//reuisição para gravar as tarefas no banco
    const task = req.body;

    if (!task.task) {
        return res.redirect("/");
    }

    try {
        await Task.create(task);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    getALLTasks,
    createTask
}