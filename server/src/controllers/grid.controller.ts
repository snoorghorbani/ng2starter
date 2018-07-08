"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";
import { model as moongooseModel, DocumentQuery } from "mongoose";
import { SocketMiddleware } from "./socket.controller";
import { ObjectId } from "bson";

const GridModel = moongooseModel("Grid");
const GridItemModel = moongooseModel("GridItem");

const router = express.Router();

const getGridWithItems = function(_id: string, userId: string): any {
	return GridModel.findById(_id).populate({
		path: "items",
		match: { owner: { $eq: userId } },
		// Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
		// select: "name -_id",
		options: { limit: 22 }
	});
};

router.get("/", function(req, res) {
	GridModel.find().then((Result) => res.json({ Result }));
});
router.get("/:id", function(req, res) {
	getGridWithItems(req.params.id, req.query.userId).then((Result: any) => res.json({ Result }));
});
router.post("/", function(req, res) {
	Promise.all(
		req.body.items.map((item: any) => {
			if (!item._id) item._id = new ObjectId();
			item.owner = req.query.userId;

			return GridItemModel.findByIdAndUpdate(item._id, item, { upsert: true, new: true });
		})
	).then((items) => {
		const gridData: any = {
			type: req.body.type,
			name: req.body.name,
			oid: req.body.oid,
			// owner: req.user.id,
			config: req.body.config,
			$addToSet: {
				items: (items as any).map((item: any) => item._id.toString())
			}
		};
		if (!req.body._id) gridData._id = new ObjectId();

		GridModel.findOneAndUpdate({ _id: req.body._id }, gridData, { upsert: true }).then((grid) => {
			getGridWithItems(grid._id, req.query.userId)
				.then((Result: any) => {
					SocketMiddleware.server.dispatchActionToClients("[GRID][DB] UPSERT", [ Result ]);
					res.send({ Result });
				})
				.catch((err: any) => {
					debugger;
				});
		});
	});
});
router.delete("/:id", function(req: Request, res: Response) {
	GridModel.findByIdAndRemove(req.params.id);
});
export { router };
