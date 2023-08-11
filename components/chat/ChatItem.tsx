import { StyleSheet, Pressable } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { FC } from 'react';
import ChatItemImage from './ChatItemImage';
import ChatItemInfo from './ChatItemInfo';
import ChatItemTextContent from './ChatItemTextContent';

interface ChatListItemProps {
  title: string;
  message: string;
  imageName?: string;
  isNewMessage?: boolean;
  timestamp?: string;
  navigation: any;
}

const ChatListItem: FC<ChatListItemProps> = ({ title, message, imageName, isNewMessage, timestamp, navigation }) => {
  const imageSource = imageName
    ? IMAGES.find(img => img.name === imageName)?.image
    : require('../../assets/user-image.png');

  const pressHandler = () => navigation.navigate('Chat');

  return (
    <Pressable
      onPress={pressHandler}
      style={[styles.chatItem, { backgroundColor: isNewMessage ? COLORS.plum500 : '#fff' }]}
    >
      <ChatItemInfo isNewMessage={isNewMessage} timestamp={timestamp} />
      <ChatItemImage imageSource={imageSource} />
      <ChatItemTextContent title={title} message={message} isNewMessage={isNewMessage} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.plum500,
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: 'relative',
    marginBottom: 12,
  },
});

export default ChatListItem;
