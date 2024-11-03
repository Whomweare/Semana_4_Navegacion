import { View} from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { User } from '../Models/User';
import { Context } from './Context';

interface ViewReact {
 children: ReactNode
}

export default function ContextProvider({children}: ViewReact) {

  const [color, setColor] = useState(false);

    // Función para cambiar el color
    const changeColor = () => {
        setColor(!color);
    };
  
 const [name, setName] = useState<string>('');
 const [secondLastName, setSecondLastName] = useState<string>('');
 const [email, setEmail] = useState<string>('');
 const [telephone, setTelephone] = useState<string>('');
 const [birthDate, setBirthDate] = useState<string> ('');
 const [list, setUsersList] = useState<User[]> ([]);

 const addNewUser = () => {
    let body: User = {
        name: name,
        secondLastName: secondLastName,
        email: email,
        telephone: telephone,
        birthDate: birthDate
    }

    setUsersList([...list, body])
 }

 useEffect(() => {

 }, [name])

 useEffect(() => {

 }, [secondLastName])

 useEffect(() => {

 }, [email])

 useEffect(() => {

 }, [telephone])

 useEffect(() => {

 }, [birthDate])

 useEffect(() => {

 }, [color])

  return (
    <View>
      <Context.Provider value={{
        color,
        name, 
        secondLastName, 
        email, 
        telephone, 
        birthDate,
        list,
        addNewUser,
        setName,
        setSecondLastName,
        setEmail,
        setTelephone,
        setBirthDate,
        changeColor,
        }}>

      {children}
      </Context.Provider>
    </View>
  )
}

export const disposeContext = () => {
  return useContext(Context);
}