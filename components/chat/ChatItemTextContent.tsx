import { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

interface ChatItemTextContentProps {
  title: string;
  message: string;
  isNewMessage?: boolean;
}

const screenDimension = Dimensions.get('screen');

const ChatItemTextContent: FC<ChatItemTextContentProps> = ({ title, message, isNewMessage }) => {
  const [screenWidth, setScreenWidth] = useState(screenDimension.width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ screen }) => setScreenWidth(screen.width));
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.chatTextContent}>
      <Text
        style={[styles.chatTitle, { color: isNewMessage ? '#fff' : COLORS.black, width: screenWidth - 133 }]}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {title}
      </Text>
      <Text
        style={[styles.chatMessage, { color: isNewMessage ? '#fff' : COLORS.black, width: screenWidth - 133 }]}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatTextContent: { marginLeft: 16 },
  chatTitle: { fontFamily: 'poppinsMedium', fontSize: 15, lineHeight: 20 },
  chatMessage: { fontSize: 14 },
});

export default ChatItemTextContent;
