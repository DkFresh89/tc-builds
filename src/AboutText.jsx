import { Text, Link, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { FcIdea, FcEngineering, FcDeployment, FcDocument, FcElectronics, FcGlobe, FcCircuit, FcFactory } from "react-icons/fc";


export default function AboutText() {


    return(
        <Box>
            <Text margin='1'>TC Builds was established in 2020 as a full vertical engineering resource. We can assist at any stage of development from, but not limited to: </Text>
                <List spacing='2.5'>
                    <ListItem >
                        <ListIcon boxSize='1.5em' as={FcIdea}/>
                        Back of the napkin idea
                    </ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcCircuit}/>
                        Full design
                    </ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcEngineering}/>
                        Prototyping
                    </ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcFactory}/>
                        Assembley
                    </ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcElectronics}/>
                        Testing/Debugging</ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcDocument}/>
                        Documentation</ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcGlobe}/>
                        Global sourcing</ListItem>
                    <ListItem>
                        <ListIcon boxSize='1.5em' as={FcDeployment}/>
                        Product launch</ListItem>
                    <ListItem></ListItem>
                </List>
            <Text>We are with you every step of the way. If you have any questions, ideas, or would just like to drop us a line, please visit our <Link as={ReachLink} to='/contact' color='blue' >contact us</Link>  page!</Text>
        </Box>
    )


}