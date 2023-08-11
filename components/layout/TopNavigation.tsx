import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { FC, ReactNode } from 'react';

interface TopNavigationProps {
  children: ReactNode;
}

const TopNavigation: FC<TopNavigationProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: COLORS.blue300,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  innerContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default TopNavigation;
