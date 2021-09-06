import { Flex, Box, Container } from '@chakra-ui/react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import About from './About'
import Sidebar from './Sidebar';
import Home from './Home';
import ContactUs from './ContactUs';

function App() {
  return (
    <Flex>
      <Sidebar />
      <Container bg='#F9F9F9' overflow='auto'>
        <Switch>
          <Route exact path="/">
          <Box bg='#F9F9F9'>
            <Home />
          </Box>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </Container>
    </Flex>
  );
}

export default App;
