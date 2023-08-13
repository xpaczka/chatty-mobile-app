import ActionButton from '../layout/ActionButton';
import ActionButtonContainer from '../layout/ActionButtonContainer';
import TopNavigation from '../layout/TopNavigation';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import PhoneIcon from '../../assets/icons/phone.svg';
import VideoCallIcon from '../../assets/icons/videocall.svg';
import CaretLeftIcon from '../../assets/icons/caret-left.svg';
import { COLORS } from '../../utils/constants';
import { FC, useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

interface ChatScreenNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Rooms'>;
  title: string;
}

const screenDimension = Dimensions.get('screen');

const ChatScreenNavigation: FC<ChatScreenNavigationProps> = ({ navigation, title }) => {
  const [screenWidth, setScreenWidth] = useState(screenDimension.width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ screen }) => setScreenWidth(screen.width));
    return () => subscription.remove();
  }, []);

  const pressHandler = () => navigation.navigate('Rooms');

  return (
    <TopNavigation>
      <View style={styles.userInfoContainer}>
        <Pressable onPress={pressHandler}>
          <CaretLeftIcon height={32} width={32} />
        </Pressable>
        <View style={styles.userImage}>
          <Image source={require('../../assets/the-widlarz-group.png')} height={44} width={44} />
        </View>
        <View>
          <Text style={[styles.userName, { width: screenWidth - 238 }]} numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </Text>
          <Text style={styles.userStatus}>Active now</Text>
        </View>
      </View>
      <ActionButtonContainer>
        <ActionButton>
          <PhoneIcon height={44} width={44} />
        </ActionButton>
        <ActionButton>
          <VideoCallIcon height={44} width={44} />
        </ActionButton>
      </ActionButtonContainer>
    </TopNavigation>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: { flexDirection: 'row', alignItems: 'center' },
  userImage: { height: 44, width: 44, borderRadius: 100, overflow: 'hidden', marginRight: 12 },
  userName: { fontFamily: 'poppinsSemibold', fontSize: 14, color: COLORS.plum500 },
  userStatus: { fontSize: 14, color: '#fff' },
});

export default ChatScreenNavigation;
