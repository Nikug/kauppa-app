import { Server, Socket } from "socket.io";

export const sockets = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        socket.on("*", () => {});
    });
};
