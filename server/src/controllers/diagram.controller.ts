"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import * as passportConfig from "../config/passport.local";

import * as DiagramModel from "../models/diagram.model";

const router = express.Router();
declare var emit: any;
export const all = (req: Request, res: Response) => {
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
router.get("/", passportConfig.isAuthenticated, function(req: Request, res: Response) {
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

router.get("/groups", function(req: Request, res: Response) {
	const o = {
		map: function() {
			debugger;
			this.Groups.forEach((group: any) => emit(group, 1));
		},
		reduce: function(k: any, vals: any) {
			debugger;
			return vals.length;
		}
		// finalize: function (k, vals) {
		//   list.list.push(k);
		//   return list.list.join(',');
		// },
		// scope:{
		//   list : list
		// }
	};

	DiagramModel.Diagram.mapReduce(o, function(err, results) {
		debugger;
		if (err) throw err;
		const groups = results.results.map((item: any) => item._id);
		res.json({ Result: groups });
	});
});

router.get("/:id", function(req: Request, res: Response) {
	DiagramModel.Diagram.findById(req.params.id).populate("Source").then(data => {
		res.json(data);
	});
});

router.post("/", function(req: Request, res: Response) {
	debugger;
	const data = req.body;
	if (!data._id) {
		delete data._id;
		const diagram = new DiagramModel.Diagram(data);
		diagram
			.save()
			.then((diagram: any) => {
				debugger;
				res.send(diagram);
			})
			.catch((err: any) => {
				debugger;
				res.send(err);
			});
	} else {
		DiagramModel.Diagram
			.findByIdAndUpdate(data._id, data, { upsert: true, new: true })
			.then(diagram => {
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

router.put("/:id", function(req: Request, res: Response) {
	DiagramModel.Diagram
		.findByIdAndUpdate(req.params.id, req.body, { upsert: true })
		.then(diagram => {
			res.send(diagram);
		})
		.catch(err => {
			debugger;
		});
});
export { router };

router.delete("/:id", function(req: Request, res: Response) {
	DiagramModel.Diagram
		.findByIdAndRemove(req.params.id)
		.then(diagram => {
			res.sendStatus(200);
		})
		.catch(err => {
			debugger;
		});
});
