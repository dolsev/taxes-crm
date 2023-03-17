import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {TicketPage} from "./pages/TicketPage";
import Navbar from "./components/Navbar";
const Container = styled.div `
    margin:0;
    padding:0;
    font-family:'Trebuchet MS',Arial,sans-serif;
    display: flex; 
`;
const App = () => {
    return (<BrowserRouter>
              <Container>
              <Navbar />
          <Routes>
            <Route path={'/'} element={<Dashboard />}/>
              <Route path='/ticket' element={<TicketPage />}/>
              <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
          </Routes>
              </Container>

          </BrowserRouter>);
};
export default App;
