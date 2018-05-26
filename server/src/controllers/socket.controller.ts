import { Server } from "http";
// import { MongoStore } from "connect-mongo";
import { PassportStatic } from "passport";

import { Server as SocketServer, listen } from "socket.io";
const passportSocketIo = require("passport.socketio");
// const cookieParser = require("cookie-parser");
import * as cookieParser from "cookie-parser";

export const enum MESSAGES {
	DISPATCH_ACTION = "DISPATCH_ACTION"
}

let io: SocketServer;
const sockets: Set<any> = new Set();
export const usernames: { [UserName: string]: Set<string> } = {};
const dynamicSocketMessages: { [message: string]: (socket: any, io: any, data: any) => any } = {
	disconnect: socket => {
		sockets.delete(socket);
	}
};
export const SocketMiddleware = {
	// TODO: export const init = function(server: Server, sessionStore: MongoStore, passport: PassportStatic) {
	init: function(server: Server, sessionStore: any, passport: PassportStatic) {
		io = listen(server);
		io.use(
			passportSocketIo.authorize({
				key: "connect.sid",
				secret: process.env.SESSION_SECRET,
				store: sessionStore,
				passport: passport,
				cookieParser: cookieParser,
				// success: onAuthorizeSuccess,
				fail: onAuthorizeFail
			})
		);

		function onAuthorizeFail(data: any, message: any, error: any, accept: any) {
			if (error) throw new Error(message);
			console.log("failed connection to socket.io:", message);
			accept(undefined, false);
			if (error) accept(new Error(message));
		}

		io.on("connection", (socket: any) => {
			usernames[socket.request.user.Username] = usernames[socket.request.user.Username] || new Set();
			if (!usernames[socket.request.user.Username].has(socket.id))
				usernames[socket.request.user.Username].add(socket.id);
			if (socket.request.user && socket.request.user.logged_in) {
			}
			sockets.add(socket);

			Object.keys(dynamicSocketMessages).forEach(message => {
				socket.on(message, (data: any) => dynamicSocketMessages[message](socket, io, data));
			});
		});
	},

	server: {
		on: (message: any, method: (socket: any, io: any, data: any) => any) => {
			dynamicSocketMessages[message] = method;
		},
		dispatchActionToClients: (ngrxActionType: string, ngrxActionPayload: any) => {
			io.emit(MESSAGES.DISPATCH_ACTION, { type: ngrxActionType, payload: ngrxActionPayload });
		},
		dispatchActionToClientByUsername: (ngrxActionType: string, ngrxActionPayload: any, participant: any) => {
			io
				.clients(usernames[participant].values)
				.emit(MESSAGES.DISPATCH_ACTION, { type: ngrxActionType, payload: ngrxActionPayload });
		},
		dispatchActionToClientBySocketId: (socketId: string, ngrxActionType: string, ngrxActionPayload: any) => {
			io.to(socketId).emit(MESSAGES.DISPATCH_ACTION, { type: ngrxActionType, payload: ngrxActionPayload });
		}
	}
};
