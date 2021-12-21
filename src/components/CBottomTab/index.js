import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Courses, Profile, Setting} from '../../assets';
import {colors, height} from '../../utils';

const CBottomTab = () => {
  const [state, setState] = useState([
    {title: 'Courses', active: true, component: Courses},
    {title: 'Profile', active: false, component: Profile},
    {title: 'Settings', active: false, component: Setting},
  ]);

  const changeTab = index => {
    setState(
      state.map((value, idx) => {
        if (idx === index) {
          return {...value, active: true};
        } else {
          return {...value, active: false};
        }
      }),
    );
  };

  return (
    <View style={styles.container}>
      {state.map((value, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => changeTab(index)}>
          <value.component style={styles.active(value.active)} />
          <Text style={styles.active(value.active)}>{value.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CBottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 14,
    height: height / 10,
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  active: active => ({
    color: active ? colors.primary : colors.gray,
  }),
});
