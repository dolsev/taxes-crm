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
                <Header style={{color:priority>=1 ? 'yellow':'' }}>★</Header>
                <Header style={{color:priority>=2 ? 'yellow':'' }}>★</Header>
                <Header style={{color:priority>=3 ? 'yellow':'' }}>★</Header>
                <Header style={{color:priority>=4 ? 'yellow':'' }}>★</Header>
                <Header style={{color:priority>=5 ? 'yellow':'' }}>★</Header>
            </StarContainer>
        </Content>
    );
}

export default PriorityDisplay;