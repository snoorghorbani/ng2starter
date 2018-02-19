"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import * as mongoose from "mongoose";
import { Response, Request, NextFunction } from "express";

import { httpGet, compare, getValue, compileString } from "../utility";
import * as fromDataModel from "../models/data.model";
import * as Model from "../models/source.model";

const router = express.Router();


const WmiClient = require("wmi-client");

const wmi = new WmiClient({
  username: "FRONTEND\FEUser",
  password: "Fr0nT3nd@8",
  host: "192.168.11.121"
});

router.get("/", function (req, res) {

  wmi.query("SELECT Caption,Version FROM Win32_OperatingSystem", function (err: any, result: any) {
    console.log(result);
    debugger;
    res.json({
      Result: result
    }
      /*
      RESULT:
        [{
          Caption: "Microsoft Windows Server 2008 R2 Enterprise",
          Version: "6.1.7601"
        }]
      */
    );
  });
});

export { router };
