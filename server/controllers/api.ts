"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import * as graph from "fbgraph";
import { Response, Request, NextFunction } from "express";


const router = express.Router();              // get an instance of the express Router

export { router };