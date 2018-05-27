"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const passportSocketIo = require("passport.socketio");
// const cookieParser = require("cookie-parser");
const cookieParser = require("cookie-parser");
let io;
const sockets = new Set();
exports.usernames = {};
const dynamicSocketMessages = {
    disconnect: socket => {
        sockets.delete(socket);
    }
};
exports.SocketMiddleware = {
    // TODO: export const init = function(server: Server, sessionStore: MongoStore, passport: PassportStatic) {
    init: function (server, sessionStore, passport) {
        io = socket_io_1.listen(server);
        io.use(passportSocketIo.authorize({
            key: "connect.sid",
            secret: process.env.SESSION_SECRET,
            store: sessionStore,
            passport: passport,
            cookieParser: cookieParser,
            // success: onAuthorizeSuccess,
            fail: onAuthorizeFail
        }));
        function onAuthorizeFail(data, message, error, accept) {
            if (error)
                throw new Error(message);
            console.log("failed connection to socket.io:", message);
            accept(undefined, false);
            if (error)
                accept(new Error(message));
        }
        io.on("connection", (socket) => {
            exports.usernames[socket.request.user.Username] = exports.usernames[socket.request.user.Username] || new Set();
            if (!exports.usernames[socket.request.user.Username].has(socket.id))
                exports.usernames[socket.request.user.Username].add(socket.id);
            if (socket.request.user && socket.request.user.logged_in) {
            }
            sockets.add(socket);
            Object.keys(dynamicSocketMessages).forEach(message => {
                socket.on(message, (data) => dynamicSocketMessages[message](socket, io, data));
            });
        });
    },
    server: {
        on: (message, method) => {
            dynamicSocketMessages[message] = method;
        },
        dispatchActionToClients: (ngrxActionType, ngrxActionPayload) => {
            io.emit("DISPATCH_ACTION" /* DISPATCH_ACTION */, { type: ngrxActionType, payload: ngrxActionPayload });
        },
        dispatchActionToClientByUsername: (ngrxActionType, ngrxActionPayload, participant) => {
            io
                .clients(exports.usernames[participant].values)
                .emit("DISPATCH_ACTION" /* DISPATCH_ACTION */, { type: ngrxActionType, payload: ngrxActionPayload });
        },
        dispatchActionToClientBySocketId: (socketId, ngrxActionType, ngrxActionPayload) => {
            io.to(socketId).emit("DISPATCH_ACTION" /* DISPATCH_ACTION */, { type: ngrxActionType, payload: ngrxActionPayload });
        }
    }
};
//# sourceMappingURL=socket.controller.js.map