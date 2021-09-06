import { Box, Heading } from "@chakra-ui/react"
import AboutText from "./AboutText"

export default function About(){

    return(
        <Box padding='15'>
            <Heading>About Us:</Heading>
            <AboutText />
        </Box>
    )
}