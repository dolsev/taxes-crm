import React from 'react';
import styled from "styled-components";

const Content = styled.div`  
background-color: rgb(220, 211, 179);
  width:50px;
  margin:2px;
  justify-content: center;
  align-items: center;
  display: flex;
`
const DeleteIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(206, 98, 98);
  display: flex;
  justify-content: center;
  color: #ffffff;
  border: 1px solid #734f4f;
  cursor: pointer;
;
`
const DeleteBlock =  () => {

    const deleteTicket = () =>{
        console.log('deleted')
    }
    return (
        <Content>
            <DeleteIcon onClick={deleteTicket}>—</DeleteIcon>
        </Content>
    );
}

export default DeleteBlock;