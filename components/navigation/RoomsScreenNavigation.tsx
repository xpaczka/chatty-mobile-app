import { Text, StyleSheet } from 'react-native';
import TopNavigation from '../layout/TopNavigation';
import ActionButton from '../layout/ActionButton';
import SearchIcon from '../../assets/icons/search.svg';
import RoomsIcon from '../../assets/icons/rooms.svg';
import { COLORS } from '../../utils/constants';
import ActionButtonContainer from '../layout/ActionButtonContainer';

const RoomsScreenNavigation = () => {
  return (
    <TopNavigation>
      <Text style={styles.heading}>Rooms</Text>
      <ActionButtonContainer>
        <ActionButton>
          <SearchIcon height={44} width={44} />
        </ActionButton>
        <ActionButton>
          <RoomsIcon height={44} width={44} />
        </ActionButton>
      </ActionButtonContainer>
    </TopNavigation>
  );
};

const styles = StyleSheet.create({
  heading: { fontFamily: 'poppinsBold', fontSize: 28, lineHeight: 42, color: COLORS.plum500 },
});

export default RoomsScreenNavigation;
