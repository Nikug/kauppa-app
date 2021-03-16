import { Server } from "socket.io";
import express from "express";
import http from "http";
import { router } from "./routers/routes";
import { sockets } from "./routers/sockets";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const port = 2999 || process.env.PORT;

app.use(router);
sockets(io);

httpServer.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
