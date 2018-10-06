/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression"; // compresses requests
import * as express_session from "express-session";
// import * as cookieSession from "cookie-session";
import * as bodyParser from "body-parser";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
var MongoDBStore = require('connect-mongodb-session');
//  import {} from "connect-mongodb-session";
import * as path from "path";
import * as mongoose from "mongoose";
import * as passport from "passport";
import * as cors from "cors";
import expressValidator = require("express-validator");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

/**
 * Models
 */
import "./models/form.model";
import "./models/bpmn.model";
import "./models/widget.model";
import "./models/grid-item.model";
import "./models/grid.model";
import "./models/page.model";
import "./models/user.model";
import "./models/gwt-scenario.model";

/**
 * API keys and Passport configuration.
 */
import * as passportConfig from "./config/passport.local";
// import * as passportConfig from "./config/passport.activedirectory";

/**
 * Create Express server.
 */
const app: express.Application = express();

/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(a => {
	console.log("connect to db successfully")
});

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
	origin: function (origin: any, callback: any) {
		const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
		callback(undefined, isWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions));

const MongoStore = MongoDBStore(express_session);
const sessionStore = new MongoStore({
	url: process.env.MONGODB_URI
});

var sess = {
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,
	cookie: {}
}
if (app.get('env') === 'production') {
	app.set('trust proxy', 1); // trust first proxy
	(sess.cookie as any).secure = true // serve secure cookies
}
app.use(
	express_session(sess)
);
// app.use(cookieSession({
//   name: "session",
//   keys: ["key1"],
//   maxAge: 24 * 60 * 60 * 1000
// }));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
	res.locals.user = req.user;
	next();
});
// app.use((req, res, next) => {
// 	// After successful login, redirect back to the intended page
// 	if (
// 		!req.user &&
// 		req.path !== "/api/user/signin" &&
// 		req.path !== "/signup" &&
// 		!req.path.match(/^\/auth/) &&
// 		!req.path.match(/\./)
// 	) {
// 		req.session.returnTo = req.path;
// 	} else if (req.user && req.path == "/account") {
// 		req.session.returnTo = req.path;
// 	}
// 	next();
// });
app.use(express.static(path.join(__dirname, "../src"), { maxAge: 31557600000 }));

/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/home";
import * as userController from "./controllers/user.controller";
import * as configController from "./controllers/config.controller";
import * as formController from "./controllers/form.controller";
import * as bpmnController from "./controllers/bpmn.controller";
import * as diagramController from "./controllers/diagram.controller";
import * as fakeController from "./controllers/fake.controller";
import * as dataController from "./controllers/data-provider.controller";
import * as eventController from "./controllers/event.controller";
import * as sourceController from "./controllers/source.controller";
import * as gwtScenarioController from "./controllers/gwt-scenario.controller";
import * as widgetController from "./controllers/widget.controller";
import * as gridController from "./controllers/grid.controller";
import * as gwtAnchorController from "./controllers/gwt-anchor.controller";
import * as pageController from "./controllers/page.controller";
import { SocketMiddleware } from "./controllers/socket.controller";

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.use("/api/user", userController.router);
app.use("/api/config", configController.router);
app.use("/api/form", formController.router);
app.use("/api/bpmn", passportConfig.isAuthenticated, bpmnController.router);
app.use("/api/diagram", passportConfig.isAuthenticated, diagramController.router);
app.use("/api/fake", fakeController.router);
app.use("/api/data", dataController.router);
app.use("/api/event", eventController.router);
app.use("/api/source", sourceController.router);
app.use("/api/uiwidget", passportConfig.isAuthenticated, widgetController.router);
app.use("/api/grid", passportConfig.isAuthenticated, gridController.router);
app.use("/api/page", passportConfig.isAuthenticated, pageController.router);
app.use("/api/gwt/scenario", passportConfig.isAuthenticated, gwtScenarioController.router);
app.use("/api/gwt/anchor", gwtAnchorController.router);

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

SocketMiddleware.init(server, sessionStore, passport);

module.exports = app;