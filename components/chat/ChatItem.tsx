import { StyleSheet, Pressable } from 'react-native';
import { FC } from 'react';
import ChatItemImage from './ChatItemImage';
import ChatItemTextContent from './ChatItemTextContent';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../../api/handlers';

interface ChatListItemProps {
  id: string;
  navigation: any;
}

const ChatListItem: FC<ChatListItemProps> = ({ id, navigation }) => {
  const { data } = useQuery(GET_ROOM, { variables: { id } });

  if (!data) return;

  const pressHandler = () => navigation.navigate('Chat');

  return (
    <Pressable onPress={pressHandler} style={styles.chatItem}>
      <ChatItemImage imageSource={require('../../assets/user-image.png')} />
      <ChatItemTextContent title={data.room.name} message={data.room.messages[data.room.messages.length - 1].body} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: 'relative',
    marginBottom: 12,
  },
});

export default ChatListItem;
