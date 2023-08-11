import { View, StyleSheet } from 'react-native';
import { CHAT_ITEMS } from '../_data/chat';
import ChatList from '../components/chat/ChatList';
import RoomsScreenNavigation from '../components/navigation/RoomsScreenNavigation';

const RoomsScreen = () => {
  return (
    <View style={styles.container}>
      <RoomsScreenNavigation />
      <ChatList data={CHAT_ITEMS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default RoomsScreen;
