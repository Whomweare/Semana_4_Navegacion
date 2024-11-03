import React from 'react'
import Provider from '../Contexts/Provider'
import Form from './Form'

export default function Users() {
    return (
        <Provider>
            <Form></Form>
        </Provider>
    )
}