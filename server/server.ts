/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression"; // compresses requests
import * as session from "express-session";
// import * as cookieSession from "cookie-session";
import * as bodyParser from "body-parser";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import * as mongo from "connect-mongo";
import * as path from "path";
import * as mongoose from "mongoose";
import * as passport from "passport";
import * as cors from "cors";
import expressValidator = require("express-validator");
debugger;

const MongoStore = mongo(session);

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

// import * as admin from "firebase-admin";

/**
 * Models
 */
import "./models/form.model";
import "./models/bpmn.model";

/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/home";
import * as userController from "./controllers/user.controller";
import * as configController from "./controllers/config.controller";
import * as formController from "./controllers/form.controller";
import * as bpmnController from "./controllers/bpmn.controller";
import * as diagramController from "./controllers/diagram.controller";
// import * as apiController from "./controllers/api";
import * as fakeController from "./controllers/fake.controller";
import * as dataController from "./controllers/data-provider.controller";
import * as eventController from "./controllers/event.controller";
import * as sourceController from "./controllers/source.controller";

/**
 * API keys and Passport configuration.
 */
import * as passportConfig from "./config/passport";

/**
 * Create Express server.
 */
const app: express.Application = express();
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

const originsWhitelist = [ process.env.TEST_SERVER_ADDRESS, process.env.SERVER_ADDRESS ];
const corsOptions = {
	origin: function(origin: any, callback: any) {
		const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
		callback(undefined, isWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions));

app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET,
		store: new MongoStore({
			url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
			autoReconnect: true
		})
	})
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
app.use((req, res, next) => {
	// After successful login, redirect back to the intended page
	if (
		!req.user &&
		req.path !== "/api/user/signin" &&
		req.path !== "/signup" &&
		!req.path.match(/^\/auth/) &&
		!req.path.match(/\./)
	) {
		req.session.returnTo = req.path;
	} else if (req.user && req.path == "/account") {
		req.session.returnTo = req.path;
	}
	next();
});
app.use(express.static(path.join(__dirname, "../src"), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../src/index-jit.html"));
// });
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

// app.get("/login", userController.getLogin);
// app.post("/login", userController.postLogin);
// app.get("/logout", userController.logout);
// app.get("/forgot", userController.getForgot);
// app.post("/forgot", userController.postForgot);
// app.get("/reset/:token", userController.getReset);
// app.post("/reset/:token", userController.postReset);
// app.get("/signup", userController.getSignup);
// app.post("/signup", userController.postSignup);
// app.get("api/account", passportConfig.isAuthenticated, userController.getAccount);

app.post("/api/account/profile", userController.postUpdateProfile);
app.post("/account/password", passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post("/account/delete", passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get("/account/unlink/:provider", passportConfig.isAuthenticated, userController.getOauthUnlink);

// app.get("/api", apiController.getApi);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

app.listen(app.get("port"), () => {
	console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
	console.log("  Press CTRL-C to stop\n");
	sourceController.sourceJob();
});

module.exports = app;
