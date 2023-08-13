import { FlatList, StyleSheet } from 'react-native';
import { FC } from 'react';
import Message from './Message';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../api/queries';

interface MessageListData {
  id: string;
  body: string;
  insertedAt: string;
  user: { id: string };
}

interface MessageListProps {
  data: MessageListData[];
}

const MessageList: FC<MessageListProps> = ({ data }) => {
  const { data: queryData } = useQuery(GET_CURRENT_USER);
  const modifiedData = [...data].sort((a, b) => new Date(a.insertedAt).getTime() - new Date(b.insertedAt).getTime());

  if (!queryData) return;

  return (
    <FlatList
      contentContainerStyle={styles.messageList}
      data={modifiedData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Message textContent={item.body} isReceived={item.user.id !== queryData.user.id} />}
    />
  );
};

const styles = StyleSheet.create({
  messageList: { flex: 1, justifyContent: 'flex-end', paddingBottom: 50 },
});

export default MessageList;
