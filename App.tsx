import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RoomsScreen from './screens/RoomsScreen';
import ChatScreen from './screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Poppins_700Bold as poppinsBold,
  Poppins_600SemiBold as poppinsSemibold,
  Poppins_500Medium as poppinsMedium,
  Poppins_400Regular as poppinsRegular,
} from '@expo-google-fonts/poppins';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ poppinsBold, poppinsSemibold, poppinsMedium, poppinsRegular });

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Rooms' component={RoomsScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
