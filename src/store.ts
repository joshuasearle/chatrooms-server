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

  addUser(socketId: string, displayName: string) {
    this.users.set(socketId, displayName);
  }

  removeUser(socketId: string) {
    this.users.delete(socketId);
  }

  userExists(socketId: string) {
    return this.users.has(socketId);
  }

  getDisplayName(socketId: string) {
    return this.users.get(socketId);
  }
}

class Rooms {
  private rooms: Map<string, Message[]>;

  constructor() {
    this.clearRooms();
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

  getRooms() {
    const roomsArray: any = [];
    this.rooms.forEach((messages, roomName) =>
      roomsArray.push({ messages, roomName })
    );
    return roomsArray;
  }

  clearRooms() {
    this.rooms = new Map<string, Message[]>();
  }
}

const sockets = new Sockets();
const users = new Users();
const rooms = new Rooms();

export { sockets, rooms, users };
