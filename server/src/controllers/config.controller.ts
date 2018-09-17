"use strict";
import * as express from "express";

import { isAuthenticated } from "../config/passport.local";
import { SocketMiddleware } from "./socket.controller";
import * as ConfigModel from "../models/config.model";

const router = express.Router();

router.get("/", function (req, res) {
	ConfigModel.Config.find().then(data =>
		res.json({
			Result: data
		})
	);
});

router.get("/:name", isAuthenticated, function (req, res) {
	ConfigModel.Config.findOne({ Name: req.params.name }).then(Result => res.json({ Result }));
});

router.put("/:name", isAuthenticated, function (req, res) {
	ConfigModel.Config
		.findOneAndUpdate({ Name: req.params.name }, req.body, { upsert: true, new: true })
		.then(config => {
			SocketMiddleware.server.dispatchActionToClients("[CONFIG] update config", config);
			res.send(config);
		})
		.catch(err => {
			debugger;
		});
});
export { router };
