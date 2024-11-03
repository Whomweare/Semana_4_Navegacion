import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import { disposeContext } from '../Contexts/Provider';

import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function Form() {

  const {addNewUser, setName, setEmail, setSecondLastName, setTelephone, setBirthDate, list, color} = disposeContext();

  return (
    <View style={[styles.container, { backgroundColor: color ? "red" : "green" }]}>
      <Text>Name:</Text>
      <TextInput onChangeText={setName}></TextInput>
      <Text>Second Last Name:</Text>
      <TextInput onChangeText={setSecondLastName}></TextInput>
      <Text>Telephone:</Text>
      <TextInput onChangeText={setTelephone}></TextInput>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail}></TextInput>
      <Text>BirthDate</Text>
      <TextInput onChangeText={setBirthDate}></TextInput>
      <Button title='Add new User' onPress={addNewUser}></Button>
      
      <FlatList
      data={list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.secondLastName}</Text>
            <Text>{item.email}</Text>
            <Text>{item.telephone}</Text>
            <Text>{item.birthDate}</Text>
        </View>
      )}
      >

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});
