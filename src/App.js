import { Box, Divider, Flex, Spacer, Stack, Image, Link } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReachLink 
} from "react-router-dom";
import './App.css';
import About from './About'
import Sidebar from './Sidebar';

function App() {
  return (
    
   
    <Flex>
        <Sidebar />
          <Switch>
            <Route>
              <About />
            </Route>
          </Switch>
    </Flex>
    
  );
}

export default App;
