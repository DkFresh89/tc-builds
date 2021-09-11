import { Flex, Box, Container } from '@chakra-ui/react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import About from './About'
import Header from './Header';
import Home from './Home';
import ContactUs from './ContactUs';
import Gears from './Gears-no-bg.webp'

function App() {
  return (
    <>
      <Header />
    <Flex bgColor='red' bgImage={Gears} bgSize='cover' overflow='scroll'>
      <Container bg='#F9F9F9' padding='10' >
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <Box bg='#F9F9F9'>
            <Home />
          </Box>
          {/* </Route> */}
          {/* <Route path='/about'> */}
            <About />
          {/* </Route> */}
          {/* <Route path='/contact'> */}
            <ContactUs />
          {/* </Route> */}
        {/* </Switch> */}
      </Container>
    </Flex>
    </>
  );
}

export default App;
