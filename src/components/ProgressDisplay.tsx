import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  background-color: #dcd3b3;
  margin: 2px;
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  min-width: 200px;
`
const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #383232;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
`
const ProgressIndicator = styled.div`
  width: 100%;
  height: 30px;
  background-color: #74b2ff;
`
function ProgressDisplay({progress}:{progress:number}) {
    return (
        <Content>
            <ProgressBar>
                <ProgressIndicator  style={{width:progress + '%'}}></ProgressIndicator>
            </ProgressBar>
        </Content>
    );
}

export default ProgressDisplay;