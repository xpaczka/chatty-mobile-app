import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RoomsScreen from './screens/RoomsScreen';

import {
  useFonts,
  Poppins_700Bold as poppinsBold,
  Poppins_600SemiBold as poppinsSemibold,
  Poppins_500Medium as poppinsMedium,
  Poppins_400Regular as poppinsRegular,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ poppinsBold, poppinsSemibold, poppinsMedium, poppinsRegular });

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={styles.container}>
      <RoomsScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
