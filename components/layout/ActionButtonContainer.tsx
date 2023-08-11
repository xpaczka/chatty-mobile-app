import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ActionButtonContainerProps {
  children: ReactNode;
}

const ActionButtonContainer: FC<ActionButtonContainerProps> = ({ children }) => {
  return <View style={styles.actionButtonContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  actionButtonContainer: { flexDirection: 'row', gap: 8 },
});

export default ActionButtonContainer;
