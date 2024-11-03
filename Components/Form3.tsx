import React from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'

import { disposeContext } from '../Contexts/Provider';

export default function Form3() {

const {color, changeColor} = disposeContext();

  return (
    <View style={[styles.container, { backgroundColor: color ? "red" : "green" }]}>
      <Text>Hello</Text>
      <Button title="Cambiar Color" onPress={() => {changeColor()}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});
