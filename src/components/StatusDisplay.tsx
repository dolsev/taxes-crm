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
                color = '#629B3C'
                break
            case 'working on it':
                color = '#E2DA3C'
                break
            case 'stuck':
                color = '#D00026'
                break
            default:
                color='#39C7E7'
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