import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';
import { FC } from 'react';

interface MessageProps {
  textContent: string;
  isReceived?: boolean;
}

const Message: FC<MessageProps> = ({ textContent, isReceived }) => {
  return (
    <View style={isReceived ? styles.messageContainerSent : styles.messageContainerReceived}>
      <View style={[styles.message, isReceived ? styles.messageRecieved : styles.messageSent]}>
        <Text style={[styles.messageText, isReceived ? styles.messageTextReceived : styles.messageTextSent]}>
          {textContent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainerSent: { marginLeft: 52, flexDirection: 'row', justifyContent: 'flex-start' },
  messageContainerReceived: { marginRight: 24, flexDirection: 'row', justifyContent: 'flex-end' },
  message: { width: 245, padding: 12, borderRadius: 12, marginBottom: 12 },
  messageRecieved: { backgroundColor: '#fff', borderBottomLeftRadius: 0 },
  messageSent: { backgroundColor: COLORS.plum300, borderBottomRightRadius: 0 },
  messageText: { fontSize: 14, color: COLORS.black },
  messageTextReceived: { color: COLORS.black },
  messageTextSent: { color: '#fff' },
});

export default Message;
