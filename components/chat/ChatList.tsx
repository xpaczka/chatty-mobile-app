import { FlatList, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';
import { ChatItem as ChatItemProps } from '../../types';
import { FC } from 'react';

interface ChatListProps {
  data: ChatItemProps[];
}

const ChatList: FC<ChatListProps> = ({ data }) => {
  return (
    <FlatList
      style={styles.chatContainer}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ChatItem
          title={item.title}
          message={item.message}
          imageName={item.imageName}
          isNewMessage={item.isNewMessage}
          timestamp={item.timestamp}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  chatContainer: { flex: 1, paddingTop: 36 },
});

export default ChatList;
