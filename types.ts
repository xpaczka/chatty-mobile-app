export interface ChatItem {
  id: string;
  title: string;
  message: string;
  imageName?: string;
  isNewMessage?: boolean;
  timestamp?: string;
}
