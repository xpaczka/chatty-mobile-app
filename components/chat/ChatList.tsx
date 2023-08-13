import { FlatList, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';
import { FC } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

interface ChatListData {
  id: string;
}

interface ChatListProps {
  data: ChatListData[];
  navigation: NativeStackNavigationProp<RootStackParamList, 'Chat'>;
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
