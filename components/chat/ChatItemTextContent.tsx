import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

interface ChatItemTextContentProps {
  title: string;
  message: string;
  isNewMessage?: boolean;
}

const ChatItemTextContent: FC<ChatItemTextContentProps> = ({ title, message, isNewMessage }) => {
  return (
    <View style={styles.chatTextContent}>
      <Text style={[styles.chatTitle, { color: isNewMessage ? '#fff' : COLORS.black }]}>{title}</Text>
      <Text style={[styles.chatMessage, { color: isNewMessage ? '#fff' : COLORS.black }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatTextContent: { marginLeft: 16 },
  chatTitle: { fontFamily: 'poppinsMedium', fontSize: 15, lineHeight: 20 },
  chatMessage: { fontSize: 14 },
});

export default ChatItemTextContent;
