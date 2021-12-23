import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CMiniList} from '..';
import {colors, width} from '../../utils';

interface props {
  Thumbnail: JSX.Element;
  hour: string;
  course: string;
  description: string;
  price: number;
  backgroundColor: number;
  onPress: (event: GestureResponderEvent) => void;
}

const CCard = ({
  Thumbnail,
  hour,
  course,
  description,
  price,
  backgroundColor,
  onPress,
}: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      <View style={styles.imageContainer(backgroundColor)}>
        {Thumbnail}
        <View style={styles.price}>
          <CMiniList name={`$${price}`} />
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.title}>{course}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CCard;

const styles = StyleSheet.create({
  container: {
    height: width / 1.2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  imageContainer: (index: number) => ({
    flex: 1,
    backgroundColor: index % 2 == 0 ? colors.ink : colors.lightblue,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  }),
  price: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 12,
  },
  detail: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    padding: 16,
  },
  hour: {
    color: colors.success,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    color: 'black',
  },
});
