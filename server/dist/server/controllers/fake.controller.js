"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    try {
        res.json({
            name: "asdfasf",
            another: [1, 3, 4, 5, 6],
            obj: {
                Upload: Math.floor(Math.random() * 100),
                Download: Math.floor(Math.random() * 100),
                all: Math.floor(Math.random() * 100),
                sex: Math.floor(Math.random() * 100)
            },
            data: [
                { value: Math.floor(Math.random() * 400), name: "data1" },
                { value: Math.floor(Math.random() * 200), name: "data2" },
                { value: Math.floor(Math.random() * 300), name: "data3" },
                { value: Math.floor(Math.random() * 500), name: "data4" },
            ]
        });
    }
    catch (e) {
        debugger;
    }
});
const c = () => { return Math.floor(Math.random() * 400); };
router.get("/fake2", function (req, res) {
    try {
        res.json({
            status: true,
            data: [
                { value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data1" },
                { value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data2" },
                { value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data3" },
                { value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data4" },
            ]
        });
    }
    catch (e) {
        debugger;
    }
});
//# sourceMappingURL=fake.controller.js.map