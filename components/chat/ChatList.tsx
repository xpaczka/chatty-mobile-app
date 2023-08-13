import { FlatList, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';
import { FC } from 'react';

interface ChatListProps {
  data: any;
  navigation: any;
}

const ChatList: FC<ChatListProps> = ({ data, navigation }) => {
  return (
    <FlatList
      style={styles.chatContainer}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ChatItem navigation={navigation} id={item.id} />}
    />
  );
};

const styles = StyleSheet.create({
  chatContainer: { flex: 1, paddingTop: 36 },
});

export default ChatList;
