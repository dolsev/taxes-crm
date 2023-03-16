import React from 'react';
import styled from "styled-components";
import {Ticket} from "./Ticket-Interface";

interface Props{
    ticket:Ticket;
}
const Container = styled.div`
  background-color: #dcd3b3;
  margin: 2px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;

`
const AvatarContainer = styled.div`
  width: 50px;
`
const AvatarImage = styled.img`

  height: 50px;
  width:50px;
  border-radius: 25px;
  object-fit: cover;

`
function AvatarDisplay({ticket}:Props) {
    return (
        <Container>
         <AvatarContainer>
            <AvatarImage src={ticket.avatar?ticket.avatar:'/images/Blank-Avatar.png'} alt={'photo of '+ ticket.owner}></AvatarImage>
            </AvatarContainer>
        </Container>
    );
}

export default AvatarDisplay;