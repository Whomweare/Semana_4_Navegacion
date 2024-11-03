import { createContext } from "react";
import { User } from "../Models/User";

export const Context = createContext({
name: '',
secondLastName: '',
email: '',
telephone: '',
birthDate: '',
list: [] as User[],
color: false,

addNewUser: () => {},
setName: (name: string) => {},
setSecondLastName: (name: string) => {},
setEmail: (name: string) => {},
setTelephone: (name: string) => {},
setBirthDate: (name: string) => {},

changeColor: () => {}
});