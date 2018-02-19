/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression"; // compresses requests
import * as session from "express-session";
// import * as cookieSession from "cookie-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as lusca from "lusca";
import * as dotenv from "dotenv";
import * as mongo from "connect-mongo";
// import * as flash from "express-flash";
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
dotenv.config({ path: ".env.example" });

// import * as admin from "firebase-admin";

// const serviceAccount = require("test-51334-firebase-adminsdk-vfi7v-5e768b1b23.json");
const serviceAccount: any = {
	type: "service_account",
	project_id: "test-51334",
	private_key_id: "5e768b1b23fa0658f642b4ce2bd1872dc0a582db",
	private_key:
		"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC43mYraDMdRhoj\ncDi61hj2f3Li83A6+koNB7dLayZzy2achVn4aoIvHi8zS0ybE991QPN/kq5XUo/C\nGvaaH5YIdiMRKv7BzCsao+NkVuggZkz46D0469fUHTM4Tj3vHoR0fCp++e1oOHS7\nIc1zUWHqn6cooPV9+veefS4dr3wGYQ8L60WYJfo1QJdFisxUcnwFwpHfQMF6dtiq\nffH2TTj7zWvng+4NJMMwI4a6hXnafmznu6O0ZS7mT0Sd4PRVslm5yHRkS0cy3Xzn\neCMux+sDW+NezoHO7fVBfacqrf1wb48PoD5CzO/Kwy9yoLNaNO29kss4pIdFn5wx\nqE+3Z4PRAgMBAAECggEAGXTii8qi8z6CfevHnA68TEE7kD3mb/CkPswXtOZx2pMh\nM593Rqpf994HsOAHEfm4FRzXCvOnVzXyvs9YsttznQGrjYMmpogXTWlQ+DGxcDi2\nE7ZjK9HqG/bTZUb8508D/UhVz7tZsjbH+DbM5DrKKXVHnuQfOfRTobrqHUNbaEM7\n8EZT1qFaUiBiq9OxkAvD21AUuEVBuDw2h+p52ff9XibEFqHi42xBgFZATx50eyO1\n9jew3gpH65Cs8+UTiTDEkSysxNOy/FireDB9Zv6IAiFODe+fcS/7nEHD6JLGVE7f\nb4fCjHbw/5i4pITByzPj0gNq/UVBYdh7HlJOcWhZmwKBgQD0D68pz/RqbkE3OGcY\nMC1V3QjZTS3fSvqY7sMlGNRvwPnaoXCtrLqdo8/IpwVYxgRCVCAGv2WB88Sc3QFx\njTHGOdCiql8edDk/oBliopF3ohzb6ztDE9w4o5ax0IdEqTkXB0CYSqvEkZSgCSPr\nXWT2vCfpY1gZM1EawythVTgGgwKBgQDB6XZbfvjtiBZfYPCo9UyDW32J+01576k3\nt0adXaOyNK5fCcuqi95/On6kzf5KI4yH/eyDlxW30QJD4nWEyirUNQd3Iq79lSoN\ngytcwJSZ+AmYHhJDQrzW5GmVs9Q7kBqMche8M+nsurNMPvB/Fb3v1NTnknyfHZYl\n5WtzEK2cGwKBgQCZRQRG6N7gu+7ew+ASk6bU5mO5O7vUH90yj7cjo+09ZV5Di+Ec\nYH4to4NIyoMUFf70vKoEMsyHiNPvgud2LSqWBxbcIMxtbqXJLDzk8Z0TGU6wWZC0\n9lL1it6HOqLIXtGIgbhyK2qlnptMyZCyLcvLG6yg6A+ae9yyRuEGViNCCwKBgHe3\neDAC0xJq+00FX28gio1qlbXzZaDLetCAIWOUZTTnW2Qnewse8U3hQkDjQIRrMB7h\ngPy48Vqb+mcIz/8chZaf6qz9x8WdKupOuh24c8YfIWU9446NDGMrf5hB/tyLGijt\nY4P5FQnnNjzzeq0rMil4X71cbf4aWRGqc00F1flTAoGBAK+bmNdlPNM3bF9CmIFI\n1NNtaZmu2JRsQgEi2fl7e3X+xpGlU1kAqs2n6+Qw3qWwpG/GM/GCCKXUFjzji/+y\nOq7eri6PeZEiH/DedrazzgeDjHV3x/JQtm00tfmfVpNGs4kECzfqJzYHfefVB1xZ\nMXFoLzPRuz53ZtOTkVxsVDp/\n-----END PRIVATE KEY-----\n",
	client_email: "firebase-adminsdk-vfi7v@test-51334.iam.gserviceaccount.com",
	client_id: "110182129164645367787",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://accounts.google.com/o/oauth2/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vfi7v%40test-51334.iam.gserviceaccount.com"
};

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://test-51334.firebaseio.com/"
// });

// const messaging = admin.messaging();
// messaging.sendToDeviceGroup("asdfasdf", {});

// const webpush = require("web-push");

// // VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey("<Your GCM API Key Here>");
// webpush.setVapidDetails(
//   "mailto:example@yourdomain.org",
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: ".....",
//   keys: {
//     auth: ".....",
//     p256dh: "....."
//   }
// };

// webpush.sendNotification(pushSubscription, "Your Push Payload Text");

/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/home";
import * as userController from "./controllers/user.controller";
import * as configController from "./controllers/config.controller";
// import * as apiController from "./controllers/api";
// import * as contactController from "./controllers/contact";
import * as fakeController from "./controllers/fake.controller";
import * as dataController from "./controllers/data-provider.controller";
import * as eventController from "./controllers/event.controller";
import * as sourceController from "./controllers/source.controller";
import * as wmiController from "./controllers/wmi.controller";

/**
 * API keys and Passport configuration.
 */
import * as passportConfig from "./config/passport";

/**
 * Create Express server.
 */
const app: express.Application = express();

/**
 * Socket io
 */
// debugger;
// const http = require("http").Server(app);
// import * as socketIo from "socket.io";
// const io = socketIo(http);

// io.on("connection", (socket) => {
//   console.log("user connected");
//   debugger;
//   socket.on("disconnect", function () {
//     debugger;
//     console.log("user disconnected");
//   });

//   socket.on("add-message", (message: any) => {
//     debugger;
//     io.emit("message", { type: "new-message", text: message });
//   });
//   socket.emit("salam");
// });

/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);

mongoose.connection.on("error", () => {
	console.log("MongoDB connection error. Please make sure MongoDB is running.");
	process.exit();
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.options("*", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.end();
});

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../../views"));
// app.set("views", path.join(__dirname, "../src"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
app.set("view engine", "pug");
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

const originsWhitelist = [ "http://localhost:4000" ];
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
// app.use(flash());
// app.use(lusca.xframe("SAMEORIGIN"));
// app.use(lusca.xssProtection(true));
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
app.use("/api/fake", fakeController.router);
app.use("/api/data", dataController.router);
app.use("/api/event", eventController.router);
app.use("/api/source", sourceController.router);
app.use("/api/wmi", wmiController.router);

// app.get("/login", userController.getLogin);
// app.post("/login", userController.postLogin);
// app.get("/logout", userController.logout);
// app.get("/forgot", userController.getForgot);
// app.post("/forgot", userController.postForgot);
// app.get("/reset/:token", userController.getReset);
// app.post("/reset/:token", userController.postReset);
// app.get("/signup", userController.getSignup);
// app.post("/signup", userController.postSignup);
// app.get("/contact", contactController.getContact);
// app.post("/contact", contactController.postContact);
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
