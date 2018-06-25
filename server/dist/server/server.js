"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const express = require("express");
const compression = require("compression"); // compresses requests
const express_session = require("express-session");
// import * as cookieSession from "cookie-session";
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");
const mongo = require("connect-mongo");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const expressValidator = require("express-validator");
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });
/**
 * Models
 */
require("./models/form.model");
require("./models/bpmn.model");
require("./models/user.model");
require("./models/gwt-scenario.model");
/**
 * Create Express server.
 */
const app = express();
/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
const originsWhitelist = [process.env.TEST_SERVER_ADDRESS, process.env.SERVER_ADDRESS];
const corsOptions = {
    origin: function (origin, callback) {
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(undefined, isWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
const MongoStore = mongo(express_session);
const sessionStore = new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
});
app.use(express_session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: sessionStore
}));
// app.use(cookieSession({
//   name: "session",
//   keys: ["key1"],
//   maxAge: 24 * 60 * 60 * 1000
// }));
debugger;
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user &&
        req.path !== "/api/user/signin" &&
        req.path !== "/signup" &&
        !req.path.match(/^\/auth/) &&
        !req.path.match(/\./)) {
        req.session.returnTo = req.path;
    }
    else if (req.user && req.path == "/account") {
        req.session.returnTo = req.path;
    }
    next();
});
app.use(express.static(path.join(__dirname, "../src"), { maxAge: 31557600000 }));
/**
 * Controllers (route handlers).
 */
const homeController = require("./controllers/home");
const userController = require("./controllers/user.controller");
const configController = require("./controllers/config.controller");
const formController = require("./controllers/form.controller");
const bpmnController = require("./controllers/bpmn.controller");
const diagramController = require("./controllers/diagram.controller");
const fakeController = require("./controllers/fake.controller");
const dataController = require("./controllers/data-provider.controller");
const eventController = require("./controllers/event.controller");
const sourceController = require("./controllers/source.controller");
const gwtScenarioController = require("./controllers/gwt-scenario.controller");
const socket_controller_1 = require("./controllers/socket.controller");
/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.use("/api/user", userController.router);
app.use("/api/config", configController.router);
app.use("/api/form", formController.router);
app.use("/api/bpmn", bpmnController.router);
app.use("/api/diagram", diagramController.router);
app.use("/api/fake", fakeController.router);
app.use("/api/data", dataController.router);
app.use("/api/event", eventController.router);
app.use("/api/source", sourceController.router);
app.use("/api/gwt/scenario", gwtScenarioController.router);
app.post("/api/account/profile", userController.postUpdateProfile);
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());
const server = app.listen(app.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
    sourceController.sourceJob();
});
debugger;
socket_controller_1.SocketMiddleware.init(server, sessionStore, passport);
module.exports = app;
//# sourceMappingURL=server.js.map