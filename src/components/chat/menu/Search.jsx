
import React from 'react'
import {
    Component,
    Container,
    Input,
    InputWrapper,
    SearchIconComponent,
    SearchIconWrapper
} from '../../../styles/searchStyles';


const Search = () => {
  return (
    <Container>
        <Component>
            <SearchIconWrapper>
                <SearchIconComponent />
            </SearchIconWrapper>
            <InputWrapper>
                <Input placeholder='search or start a new chat'/>
            </InputWrapper>
        </Component>
    </Container>
  )
}

export default Search