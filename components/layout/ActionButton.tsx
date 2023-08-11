import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ActionButtonProps {
  children: ReactNode;
}

const ActionButton: FC<ActionButtonProps> = ({ children }) => {
  return <View style={styles.actionButton}>{children}</View>;
};

const styles = StyleSheet.create({
  actionButton: { height: 44, width: 44, backgroundColor: '#fff', borderRadius: 100 },
});

export default ActionButton;
