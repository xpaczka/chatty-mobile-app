import type { ChatItem, Message } from '../types';

export const CHAT_ITEMS: ChatItem[] = [
  {
    id: 'c1',
    title: 'The one with Harry',
    message: 'Hey Harry, how you doing?',
    imageName: 'harry-chat-image',
    isNewMessage: true,
  },
  {
    id: 'c2',
    title: 'The one with Ron',
    message: 'Ron sent a photo.',
    imageName: 'ron-chat-image',
    timestamp: '24 m ago',
  },
  {
    id: 'c3',
    title: 'The one with Remus',
    message: 'My parents tried everything, but in...',
    timestamp: '2 h ago',
  },
];

export const MESSAGES: Message[] = [
  {
    id: 'm1',
    textContent: `It would be quite nice if you stopped jumping down out throats, Harry, because in case you haven't noticed, Ron and I are on your side!`,
    isReceived: true,
  },
  {
    id: 'm2',
    textContent: `Chill out gurl. I'm cool`,
  },
  {
    id: 'm3',
    textContent: `Let us step into the night and pursue that flighty temptress, adventure`,
  },
];
