import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatScreenNavigation from '../components/navigation/ChatScreenNavigation';
import MessageInput from '../components/message/MessageInput';
import MessageList from '../components/message/MessageList';

import { useQuery } from '@apollo/client';
import { GET_SINGLE_CHAT } from '../api/handlers';

const ChatScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const { id } = route.params;
  const { data } = useQuery(GET_SINGLE_CHAT, { variables: { id } });

  if (!data) return;

  return (
    <View style={styles.container}>
      <ChatScreenNavigation navigation={navigation} title={data.room.name} />
      <MessageList data={data.room.messages} />
      <MessageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ChatScreen;
