import { SocketType } from './types';
import { sockets, users, rooms } from './store';

export const onSocketConnect = (emitRooms: any) => (socket: SocketType) => {
  sockets.addSocket(socket.id);
  console.log(`${socket.id} just connected`);
  socket.on('message', onSocketMessage(socket, emitRooms));
};

export const onSocketDisconnect = (socket: SocketType) => {
  sockets.removeSocket(socket.id);
  console.log(`${socket.id} just disconnected`);
};

interface MessageRequest {
  roomName: string;
  content: string;
  socketId: string;
}

// Store socket in closure using currying
const onSocketMessage =
  (socket: SocketType, emitRooms: any) =>
  ({ roomName, content, socketId }: MessageRequest) => {
    if (content === '') return;
    if (!rooms.roomExists(roomName)) return;
    if (!users.userExists(socketId)) return;
    rooms.sendMessage(roomName, content, users.getDisplayName(socketId));
    emitRooms();
  };
