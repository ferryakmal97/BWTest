import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils';

interface props {
  name: string;
}

const CMiniList = ({name = 'List'}: props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CMiniList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  title: {
    color: 'white',
  },
});
