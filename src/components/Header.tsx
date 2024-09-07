import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    padding-left: 30px;
    width : 100vw;
    height: 70px;
    background-color: #f1efef;
    @media (max-width: 550px) {
        display:none;
    }
`

function Header() {
  return (
    <HeaderStyle>
        TODO TASK
    </HeaderStyle>
  )



}

export default Header