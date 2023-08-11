import ActionButton from '../layout/ActionButton';
import ActionButtonContainer from '../layout/ActionButtonContainer';
import TopNavigation from '../layout/TopNavigation';
import { View, Text, Image, StyleSheet } from 'react-native';
import PhoneIcon from '../../assets/icons/phone.svg';
import VideoCallIcon from '../../assets/icons/videocall.svg';
import CaretLeftIcon from '../../assets/icons/caret-left.svg';
import { COLORS } from '../../constants';

const ChatScreenNavigation = () => {
  return (
    <TopNavigation>
      <View style={styles.userInfoContainer}>
        <View>
          <CaretLeftIcon height={32} width={32} />
        </View>
        <View style={styles.userImage}>
          <Image source={require('../../assets/the-widlarz-group.png')} height={44} width={44} />
        </View>
        <View>
          <Text style={styles.userName}>The Widlarz Group</Text>
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
