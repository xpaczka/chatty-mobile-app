import type { ChatItem } from '../types';

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
