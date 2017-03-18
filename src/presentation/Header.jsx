import { Brand } from 'presentation/Brand'
import { TextInput } from 'presentation/TextInput'
import React from 'react'

export const Header = () => (
  <header className='header'>
    <Brand>todo</Brand>
    <TextInput className='new-todo' placeholder='What needs to be done?' />
  </header>
)
