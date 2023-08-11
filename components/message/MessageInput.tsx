import { View, TextInput, StyleSheet } from 'react-native';
import SendIcon from '../../assets/icons/send.svg';
import { COLORS } from '../../constants';

const MessageInput = () => {
  return (
    <View style={styles.messageInputContainer}>
      <TextInput style={styles.messageInput} />
      <View>
        <SendIcon height={44} width={44} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageInputContainer: {
    height: 102,
    backgroundColor: COLORS.blue300,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  messageInput: { backgroundColor: '#fff', borderRadius: 12, padding: 12, height: 41, fontSize: 14, flex: 1 },
});

export default MessageInput;
