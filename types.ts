export interface ChatItem {
  id: string;
  title: string;
  message: string;
  imageName?: string;
  isNewMessage?: boolean;
  timestamp?: string;
}

export interface Message {
  id: string;
  textContent: string;
  isReceived?: boolean;
}
