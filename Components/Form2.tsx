import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

import { disposeContext } from '../Contexts/Provider';

export default function Form2() {
  
  const {color} = disposeContext();

  return (
    <View style={[styles.container, { backgroundColor: color ? "red" : "green"}]}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});
