import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Search} from '../../assets';
import {colors} from '../../utils';

const CTextInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search course" style={styles.input} />
      <TouchableOpacity>
        <Search width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
  },
});
