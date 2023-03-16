import React from 'react';
import styled from "styled-components";

const Content = styled.div`  

`
const DeleteIcon = styled.div`
`
const DeleteBlock =  () => {

    const deleteTicket = () =>{
        console.log('deleted')
    }
    return (
        <Content>
            <DeleteIcon onClick={deleteTicket}>x</DeleteIcon>
        </Content>
    );
}

export default DeleteBlock;