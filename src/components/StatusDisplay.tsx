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

function StatusDisplay({status}:{status:string}) {

    const getColor=(status:string | undefined = 'default')=>{
        let color
        switch (status){
            case 'done':
                color = 'green'
                break
            case 'working on it':
                color = 'yellow'
                break
            case 'stuck':
                color = 'red'
                break
            default:
                color='blue'
        }
        return color
    }


    return (
        <Content style={{backgroundColor:getColor(status)}}>
            {status}
        </Content>
    );
}

export default StatusDisplay;