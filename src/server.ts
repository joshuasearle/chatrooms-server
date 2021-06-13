import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

import { onSocketConnect, onSocketDisconnect } from './sockets';
import router from './router';
import { Server } from 'socket.io';
import { rooms } from './store';
dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;

const io = new Server(server);

export const emitRooms: any = () => {
  io.sockets.emit('rooms', rooms.getRooms());
};

io.on('connection', onSocketConnect(emitRooms));
io.on('disconnect', onSocketDisconnect);

setInterval(() => {
  rooms.clearRooms();
}, 1000 * 60 * 60 * 2);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use(router);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
