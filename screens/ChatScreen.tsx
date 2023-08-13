import { FC } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import ChatScreenNavigation from '../components/navigation/ChatScreenNavigation';
import MessageInput from '../components/message/MessageInput';
import MessageList from '../components/message/MessageList';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CHAT } from '../api/handlers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

interface ChatScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Rooms'>;
  route: RouteProp<RootStackParamList, 'Chat'>;
}

const ChatScreen: FC<ChatScreenProps> = ({ navigation, route }) => {
  const { id } = route.params;
  const { data } = useQuery(GET_SINGLE_CHAT, { variables: { id } });

  if (!data) return;

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ChatScreenNavigation navigation={navigation} title={data.room.name} />
      <MessageList data={data.room.messages} />
      <MessageInput />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ChatScreen;
