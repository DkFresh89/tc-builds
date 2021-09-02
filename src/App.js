import { Flex } from '@chakra-ui/react'
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
    </Flex>
  );
}

export default App;
