import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.nav`
  height: 100vh;
  background-color: #1a1919;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  align-items: center;
`
const LogoContainer = styled.div`
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
`
const LogoImg = styled.img`
    width: 25px;
`
const ControlsContainer = styled.div`
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
`
const Icon = styled.div`
  color: #c9c90a

`
function Navbar() {
    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <LogoImg src='/images/xxCRM.png'/>
            </LogoContainer>
            <ControlsContainer>
                <Icon onClick={()=>navigate('/tickets')}>+</Icon>
                <Icon onClick={()=>navigate('/')}>{'<<'}</Icon>
            </ControlsContainer>
        </Container>
    )
}

export default Navbar;