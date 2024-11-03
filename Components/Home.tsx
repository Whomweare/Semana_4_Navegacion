import React from 'react'
import Provider from '../Contexts/Provider'
import Form2 from './Form2'

export default function Home() {
    return (
        <Provider>
            <Form2></Form2>
        </Provider>
    )
}