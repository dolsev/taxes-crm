import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  background-color: #dcd3b3;
  margin: 2px;
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`
const StarContainer = styled.div`
display: flex;
`
const Header = styled.h3`
    padding: 0 5px;

`
function PriorityDisplay({priority}:{priority:number}) {
    return (
        <Content>
            <StarContainer>
                <Header style={{color:priority>=1 ? '#fff134':'' }}>★</Header>
                <Header style={{color:priority>=2 ? '#fff134':'' }}>★</Header>
                <Header style={{color:priority>=3 ? '#fff134':'' }}>★</Header>
                <Header style={{color:priority>=4 ? '#fff134':'' }}>★</Header>
                <Header style={{color:priority>=5 ? '#fff134':'' }}>★</Header>
            </StarContainer>
        </Content>
    );
}

export default PriorityDisplay;