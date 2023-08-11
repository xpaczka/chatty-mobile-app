import { FC } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ChatItemImageProps {
  imageSource: ImageSourcePropType;
}

const ChatItemImage: FC<ChatItemImageProps> = ({ imageSource }) => {
  return (
    <View style={styles.chatImage}>
      <Image source={imageSource} resizeMode='cover' height={64} width={64} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatImage: { height: 64, width: 64, borderRadius: 100, overflow: 'hidden' },
});

export default ChatItemImage;
