module.exports = app => {
    const ox_controller = require("../controllers/ox.controller.js");

    var router = require("express").Router();

    router.post("/", ox_controller.create);

    router.get("/", ox_controller.gen);

    /*router.get("/finished", todo.findAllFinished);

    router.get("/:id", todo.findOne);

    router.put("/:id", todo.update);

    router.delete("/:id", todo.delete);

    router.delete("/", todo.deleteAll);*/

    app.use('/api',router);
}
