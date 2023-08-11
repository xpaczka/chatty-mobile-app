import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatScreenNavigation from '../components/navigation/ChatScreenNavigation';
import MessageInput from '../components/message/MessageInput';
import { MESSAGES } from '../_data/chat';
import MessageList from '../components/message/MessageList';

const ChatScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <ChatScreenNavigation navigation={navigation} />
      <MessageList data={MESSAGES} />
      <MessageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ChatScreen;
