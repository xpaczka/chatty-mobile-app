import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import SendIcon from '../../assets/icons/send.svg';
import { COLORS } from '../../utils/constants';
import { useEffect, useState } from 'react';

const MessageInput = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => setIsKeyboardVisible(true));
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => setIsKeyboardVisible(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={[styles.messageInputContainer, { height: isKeyboardVisible ? 'auto' : 102 }]}>
      <TextInput style={styles.messageInput} />
      <View>
        <SendIcon height={44} width={44} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageInputContainer: {
    backgroundColor: COLORS.blue300,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  messageInput: { backgroundColor: '#fff', borderRadius: 12, padding: 12, height: 41, fontSize: 14, flex: 1 },
});

export default MessageInput;
