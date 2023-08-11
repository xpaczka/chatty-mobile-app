import { View, Text, StyleSheet } from 'react-native';
import TopNavigation from '../layout/TopNavigation';
import ActionButton from '../layout/ActionButton';
import SearchIcon from '../../assets/icons/search.svg';
import RoomsIcon from '../../assets/icons/rooms.svg';
import { COLORS } from '../../constants';

const RoomsScreenNavigation = () => {
  return (
    <TopNavigation>
      <Text style={styles.heading}>Rooms</Text>
      <View style={styles.actionButtonContainer}>
        <ActionButton>
          <SearchIcon height={44} width={44} />
        </ActionButton>
        <ActionButton>
          <RoomsIcon height={44} width={44} />
        </ActionButton>
      </View>
    </TopNavigation>
  );
};

const styles = StyleSheet.create({
  heading: { fontFamily: 'poppinsBold', fontSize: 28, lineHeight: 42, color: COLORS.plum500 },
  actionButtonContainer: { flexDirection: 'row', gap: 8 },
});

export default RoomsScreenNavigation;
