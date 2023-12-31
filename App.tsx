import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RoomsScreen from './screens/RoomsScreen';
import ChatScreen from './screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { client } from './api';
import { ApolloProvider } from '@apollo/client';
import { ComponentType } from 'react';

import {
  useFonts,
  Poppins_700Bold as poppinsBold,
  Poppins_600SemiBold as poppinsSemibold,
  Poppins_500Medium as poppinsMedium,
  Poppins_400Regular as poppinsRegular,
} from '@expo-google-fonts/poppins';

const Stack = createNativeStackNavigator();

// TODO: add loading behavior in every component using query
// TODO: add data refetching on every mutation

const App = () => {
  const [fontsLoaded, fontError] = useFonts({ poppinsBold, poppinsSemibold, poppinsMedium, poppinsRegular });

  if (!fontsLoaded && !fontError) return null;

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Rooms' component={RoomsScreen as ComponentType} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={ChatScreen as ComponentType} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
