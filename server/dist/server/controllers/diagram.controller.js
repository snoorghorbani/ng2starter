"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passportConfig = require("../config/passport");
const DiagramModel = require("../models/diagram.model");
const router = express.Router();
exports.router = router;
exports.all = (req, res) => {
    debugger;
    req.user;
    DiagramModel.Diagram
        .find()
        .where("IsActive", true)
        .populate("Source")
        .then(Result => {
        res.json({ Result });
    })
        .catch(err => {
        debugger;
    });
};
router.get("/", passportConfig.isAuthenticated, function (req, res) {
    debugger;
    req.user;
    DiagramModel.Diagram
        .find()
        .where("IsActive", true)
        .populate("Source")
        .then(Result => {
        res.json({ Result });
    })
        .catch(err => {
        debugger;
    });
});
router.get("/groups", function (req, res) {
    const o = {
        map: function () {
            this.Groups.forEach((group) => emit(group, 1));
        },
        reduce: function (k, vals) {
            return vals.length;
        },
    };
    DiagramModel.Diagram.mapReduce(o, function (err, results) {
        debugger;
        if (err)
            throw err;
        const groups = results.map((item) => item._id);
        res.json({ Result: groups });
    });
});
router.get("/:id", function (req, res) {
    DiagramModel.Diagram
        .findById(req.params.id)
        .populate("Source")
        .then(data => {
        res.json(data);
    });
});
router.post("/", function (req, res) {
    debugger;
    const data = req.body;
    if (!data._id) {
        delete data._id;
        const diagram = new DiagramModel.Diagram(data);
        diagram.save()
            .then((diagram) => { debugger; res.send(diagram); })
            .catch((err) => { debugger; res.send(err); });
    }
    else {
        DiagramModel.Diagram.findByIdAndUpdate(data._id, data, { upsert: true, new: true }).then(diagram => {
            res.send(diagram);
        })
            .catch(err => {
            debugger;
        });
    }
    // model.save()
    //   .then(diagram => {
    //   })
    //   .catch(err => {
    //   });
});
router.put("/:id", function (req, res) {
    DiagramModel.Diagram
        .findByIdAndUpdate(req.params.id, req.body, { upsert: true })
        .then(diagram => {
        res.send(diagram);
    })
        .catch(err => {
        debugger;
    });
});
router.delete("/:id", function (req, res) {
    DiagramModel.Diagram
        .findByIdAndRemove(req.params.id)
        .then(diagram => {
        res.sendStatus(200);
    })
        .catch(err => {
        debugger;
    });
});
//# sourceMappingURL=diagram.controller.js.map