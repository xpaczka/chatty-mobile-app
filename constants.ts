export const COLORS = {
  blue100: '#F0F8FF',
  blue300: '#B6DEFD',
  plum500: '#5603AD',
  gray500: '#9FA2B2',
  active: '#A8FF76',
  black: '#1A1A1A',
};

interface Image {
  name: string;
  image: NodeRequire;
}

export const IMAGES: Image[] = [
  { name: 'harry-chat-image', image: require('./assets/users/harry-chat-image.png') },
  { name: 'ron-chat-image', image: require('./assets/users/ron-chat-image.png') },
];
