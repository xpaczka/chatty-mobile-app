import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

interface ChatItemInfoProps {
  isNewMessage?: boolean;
  timestamp?: string;
}

const ChatItemInfo: FC<ChatItemInfoProps> = ({ isNewMessage, timestamp }) => {
  return (
    <View style={styles.chatInfo}>
      {isNewMessage && <View style={styles.chatUnread}></View>}
      {!isNewMessage && <Text style={styles.chatTimestamp}>{timestamp}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  chatInfo: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  chatUnread: {
    height: 12,
    width: 12,
    borderRadius: 100,
    backgroundColor: COLORS.active,
  },
  chatTimestamp: {
    fontFamily: 'poppinsRegular',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'right',
    color: COLORS.gray500,
  },
});

export default ChatItemInfo;
