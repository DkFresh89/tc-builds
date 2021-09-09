import { Text, Link, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import {  } from "react-icons/go";
import { FcIdea, FcEngineering } from "react-icons/fc";


export default function AboutText() {


    return(
        <Box>

        <Text>TC Builds was established in 2020 as a fully vertical engineering resource. We can assist at any stage of development from but not limited to: </Text>
            <List>
                <ListItem>
                    <ListIcon as={FcIdea}/>
                    Back of the napkin idea
                </ListItem>
                <ListItem>Full design</ListItem>
                <ListItem>Assebmly</ListItem>
                <ListItem>Prototyping</ListItem>
                <ListItem>Assebmley</ListItem>
                <ListItem>Testing/Debugging</ListItem>
                <ListItem>Documentation</ListItem>
                <ListItem>Global sourcing</ListItem>
                <ListItem>Product launch</ListItem>
                <ListItem></ListItem>
            </List>
            <Text>We are with you every step of the way. If you have any questions, ideas, or would just like to drop us a line, please visit our <Link as={ReachLink} to='/contact' color='blue' >contact us</Link>  page!</Text>
        </Box>
    )


}