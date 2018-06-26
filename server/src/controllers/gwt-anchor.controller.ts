"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel } from "mongoose";
import { SocketMiddleware } from "./socket.controller";
import { ObjectId } from "bson";

const Model = moongooseModel("GwtScenario");

const router = express.Router();

router.get("/:id/scenarios", function(req, res) {
	Model.find({ anchorId: req.params.id }).then(Result => res.json({ Result }));
});

export { router };
