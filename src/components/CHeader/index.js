import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Previos} from '../../assets';
import {colors} from '../../utils';

const CHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
        activeOpacity={0.7}>
        <Previos width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
  },
});
