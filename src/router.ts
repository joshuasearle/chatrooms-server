import { Router } from 'express';
import { emitRooms } from './server';
import { rooms, sockets, users } from './store';

const router = Router();

router.use('/health', (req, res) => {
  res.status(200).send();
});

router.post('/login', (req, res) => {
  const { socketId, displayName } = req.body;

  if (displayName === '') {
    return res.send({
      create: false,
      message: 'Display name cannot be an empty string',
    });
  }

  if (!sockets.socketExists(socketId)) {
    return res.send({ created: false, message: 'Socket does not exist' });
  }

  users.addUser(socketId, displayName);
  res.send({ created: true, message: 'User was created', rooms: rooms });
});

router.post('/room', (req, res) => {
  const { roomName, socketId } = req.body;

  if (!users.userExists(socketId)) {
    return res.send({
      created: false,
      message: 'You are not logged in',
    });
  }

  if (roomName === '') {
    return res.send({
      created: false,
      message: 'Room name cannot be an empty string',
    });
  }

  rooms.addRoom(roomName);
  emitRooms();
});

export default router;
