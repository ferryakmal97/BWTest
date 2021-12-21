import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Notification} from '../../assets';
import {colors} from '../../utils';

const CMainHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.helloContainer}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Notification width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CMainHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 14,
  },
  helloContainer: {
    flex: 1,
  },
  hello: {
    fontSize: 18,
    color: 'black',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
  },
});
