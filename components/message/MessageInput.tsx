import { View, TextInput, StyleSheet, Keyboard, Pressable } from 'react-native';
import SendIcon from '../../assets/icons/send.svg';
import { COLORS } from '../../utils/constants';
import { FC, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SEND_MESSAGE } from '../../api/mutations';
import { GET_CURRENT_USER } from '../../api/queries';

interface MessageInputProps {
  roomId: string;
}

const MessageInput: FC<MessageInputProps> = ({ roomId }) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const { data: currentUser } = useQuery(GET_CURRENT_USER);

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onCompleted: data => console.log(data),
    onError: error => console.log(error),
  });

  const sendMessageHandler = () => {
    if (!message) return;

    sendMessage({ variables: { roomId, body: message } });
    setMessage('');
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => setIsKeyboardVisible(true));
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => setIsKeyboardVisible(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (!currentUser) return;

  return (
    <View style={[styles.messageInputContainer, { height: isKeyboardVisible ? 'auto' : 102 }]}>
      <TextInput style={styles.messageInput} value={message} onChangeText={text => setMessage(text)} />
      <Pressable onPress={sendMessageHandler}>
        <SendIcon height={44} width={44} />
      </Pressable>
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
