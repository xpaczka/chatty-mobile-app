import { FlatList, StyleSheet } from 'react-native';
import { Message as MessageProps } from '../../types';
import { FC } from 'react';
import Message from './Message';

interface MessageListProps {
  data: MessageProps[];
}

const MessageList: FC<MessageListProps> = ({ data }) => {
  return (
    <FlatList
      contentContainerStyle={styles.messageList}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Message textContent={item.textContent} isReceived={item.isReceived} />}
    />
  );
};

const styles = StyleSheet.create({
  messageList: { flex: 1, justifyContent: 'flex-end', paddingBottom: 50 },
});

export default MessageList;
