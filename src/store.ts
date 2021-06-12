import { Message, SocketType } from './types';

class Sockets {
  private socketIds: Set<string>;

  constructor() {
    this.socketIds = new Set<string>();
  }

  addSocket(socketId: string) {
    this.socketIds.add(socketId);
  }

  removeSocket(socketId: string) {
    this.socketIds.delete(socketId);
  }

  socketExists(socketId: string) {
    return this.socketIds.has(socketId);
  }
}

class Users {
  private users: Map<string, string>;

  constructor() {
    this.users = new Map<string, string>();
  }

  addUser(socket: SocketType, displayName: string) {
    this.users.set(socket.id, displayName);
  }

  removeUser(socket: SocketType) {
    this.users.delete(socket.id);
  }

  userExists(socket: SocketType) {
    return this.users.has(socket.id);
  }

  getDisplayName(socket: SocketType) {
    return this.users.get(socket.id);
  }
}

class Rooms {
  private rooms: Map<string, Message[]>;

  constructor() {
    this.rooms = new Map<string, Message[]>();
  }

  addRoom(roomName: string) {
    this.rooms.set(roomName, []);
  }

  removeRoom(roomName: string) {
    this.rooms.delete(roomName);
  }

  sendMessage(roomName: string, content: string, displayName: string) {
    this.rooms.get(roomName).push({ content, displayName });
  }

  getMessages(roomName: string) {
    return this.rooms.get(roomName);
  }

  roomExists(roomName: string) {
    return this.rooms.has(roomName);
  }
}

const sockets = new Sockets();
const users = new Users();
const rooms = new Rooms();

export { sockets, rooms, users };
