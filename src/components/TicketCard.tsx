import React from 'react';
import styled from "styled-components";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import {Link} from "react-router-dom";
import {Ticket} from "./Ticket-Interface";


const Container = styled.div`
display: flex;
  width: 100%;
  
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  width: 100%;

`
const TicketColor=styled.div`
  background-color: #dcd3b3;
  margin: 2px;
  display: flex;
  align-items: center;

  width:5px;
    padding: 10px;
`
const Title = styled.h1`
  background-color: #dcd3b3;
  margin: 2px;
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
`

function TicketCard({color, ticket,id }: {color: string, ticket: Ticket,id:number}) {
    return (
        <Container>
            <StyledLink  to={`/ticket/${ticket.documentId}`} id='link'>
                <TicketColor />
                <Title>{ticket.title}</Title>
                <AvatarDisplay ticket={ticket} />
                <StatusDisplay status={ticket.status ?? 'default'} />
                <PriorityDisplay priority={ticket.priority}/>
                <ProgressDisplay progress={ticket.progress}/>
            </StyledLink>
            <DeleteBlock />
        </Container>
    );
}

export default TicketCard;
