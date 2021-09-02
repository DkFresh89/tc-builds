import { Box, Divider, Flex, Spacer, Stack, Image, Link, Icon } from '@chakra-ui/react'
import {
    Link as ReachLink 
} from "react-router-dom";
import logo from './TCBuildsLogo-Cropped.svg'
import { FaHome, FaRegQuestionCircle, FaMailBulk } from "react-icons/fa";


export default function Sidebar() {

    return(
        <Flex
        height="100vh"
        width={{
            base: 'full',
            sm: 'xs',
        }}
        direction="column"
        bg="blue.600"
        color="white"
        px={6}
        py={8}
        >
        <Box mb={8} >
            <Image src={logo} />
        </Box>
        <Stack spacing={6}>
            <Stack>
                <Link as={ReachLink} to="/">
                <Icon as={FaHome} margin='2' />
                    Home
                </Link>
                <Link as={ReachLink}to="/about">
                    <Icon as={FaRegQuestionCircle} margin='2' />
                    About Us 
                </Link>
                <Link as={ReachLink}to="/contact">
                    <Icon as={FaMailBulk} margin='2' />
                    Contact Us 
                </Link>
            </Stack>
            <Divider borderColor="whiteAlpha.400" />
            <Stack>

            </Stack>
        </Stack>
        <Spacer />
        </Flex>
    )

}