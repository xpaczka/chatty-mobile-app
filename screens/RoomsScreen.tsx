import { View, StyleSheet } from 'react-native';
import ChatList from '../components/chat/ChatList';
import RoomsScreenNavigation from '../components/navigation/RoomsScreenNavigation';

import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../api/handlers';

const RoomsScreen = ({ navigation }: { navigation: any }) => {
  const { data } = useQuery(GET_ROOMS);

  if (!data) return;

  return (
    <View style={styles.container}>
      <RoomsScreenNavigation />
      <ChatList data={data.usersRooms.rooms} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default RoomsScreen;
