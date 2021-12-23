import React from 'react';
import {View} from 'react-native';

interface Gap {
  width?: number;
  height?: number;
}

const CGap = ({width, height}: Gap) => {
  return <View style={{width, height}} />;
};

export default CGap;
