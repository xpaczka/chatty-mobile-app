import { FlatList, StyleSheet } from 'react-native';
import { FC } from 'react';
import Message from './Message';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../api/handlers';

interface MessageListData {
  id: string;
  body: string;
}

interface MessageListProps {
  data: MessageListData[];
}

const MessageList: FC<MessageListProps> = ({ data }) => {
  const { data: queryData } = useQuery(GET_CURRENT_USER);

  if (!queryData) return;

  return (
    <FlatList
      contentContainerStyle={styles.messageList}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Message textContent={item.body} isReceived={item.id !== queryData.user.id} />}
    />
  );
};

const styles = StyleSheet.create({
  messageList: { flex: 1, justifyContent: 'flex-end', paddingBottom: 50 },
});

export default MessageList;
