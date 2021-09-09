import { Text, Link, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import {  } from "react-icons/go";
import { FcIdea, FcEngineering, FcDeployment, FcDocument, FcElectronics, FcGlobe, FcCircuit, FcFactory } from "react-icons/fc";


export default function AboutText() {


    return(
        <Box>

        <Text margin='1'>TC Builds was established in 2020 as a fully vertical engineering resource. We can assist at any stage of development from but not limited to: </Text>
            <List spacing='2.5'>
                <ListItem>
                    <ListIcon as={FcIdea}/>
                    Back of the napkin idea
                </ListItem>
                <ListItem>
                    <ListIcon as={FcCircuit}/>
                    Full design
                </ListItem>
                <ListItem>
                    <ListIcon as={FcEngineering}/>
                    Prototyping
                </ListItem>
                <ListItem>
                    <ListIcon as={FcFactory}/>
                    Assembley
                </ListItem>
                <ListItem>
                    <ListIcon as={FcElectronics}/>
                    Testing/Debugging</ListItem>
                <ListItem>
                    <ListIcon as={FcDocument}/>
                    Documentation</ListItem>
                <ListItem>
                    <ListIcon as={FcGlobe}/>
                    Global sourcing</ListItem>
                <ListItem>
                    <ListIcon as={FcDeployment}/>
                    Product launch</ListItem>
                <ListItem></ListItem>
            </List>
            <Text>We are with you every step of the way. If you have any questions, ideas, or would just like to drop us a line, please visit our <Link as={ReachLink} to='/contact' color='blue' >contact us</Link>  page!</Text>
        </Box>
    )


}