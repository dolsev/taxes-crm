import React from 'react';
import styled from "styled-components";
import TicketCard from "../components/TicketCard";
const tickets = [
    {   id:1,
        category:'Q1 2023',
        color:'red',
        title:'Tax 101 Vid',
        owner:'Andry Kate',
        avatar:'/images/av1.avif',
        status:'done',
        priority:5,
        progress:100,
        description:'Make a vid to do taxes',
        timestamp:'2022-02-1T07:36:17+0000',
        documentId:'abs21'
    },
    {   id:2,
        category:'Q1 2023',
        color:'red',
        title:'Build boys',
        owner:'Baben',
        status:'working on it',
        priority:2,
        progress:55,
        description:'Make a vid to do AI',
        timestamp:'2022-02-1T07:36:17+0000',
        documentId:'azz32'
    },
    {   id:3,
        category:'Q2 2023',
        color:'blue',
        title:'By 123',
        owner:'Anna gag',
        avatar:'/images/av2.avif',
        status:'done',
        priority:3,
        progress:100,
        description:'Fan',
        timestamp:'2022-03-1T07:36:17+0000',
        documentId:'efef44',
    }
]
const Content = styled.div`
    padding: 30px;
`
const Title = styled.h1`
`
const TicketContainer=styled.div`
    height: 80vh;
    overflow: scroll;
`
const Category = styled.div`
display: flex;
flex-direction: column`
const UniqueCategoryTitle = styled.h3`
`

const uniqueCategories = [
...Array.from(new Set(tickets.map(({category})=>category)))
]

function Dashboard() {
    return (
        <Content>
            <Title>My Project</Title>
            <TicketContainer>
                {tickets&&uniqueCategories?.map( (uniqueCategory, categoryIndex)=>(
                    <Category key={categoryIndex}>
                        <UniqueCategoryTitle>{uniqueCategory}</UniqueCategoryTitle>
                        { tickets.filter(ticket=>ticket.category===uniqueCategory).map((filteredTicket,ticketIndex)=>(
                            <TicketCard
                            id={ticketIndex}
                            color={filteredTicket.color}
                            ticket={filteredTicket}
                            />))
                        }
                    </Category>
                ) )}
            </TicketContainer>
        </Content>
    );
}

export default Dashboard;