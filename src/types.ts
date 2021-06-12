import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export type SocketType = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;

export interface Message {
  content: string;
  displayName: string;
}
