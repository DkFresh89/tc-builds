// import { Box, Divider, Flex, Spacer, Stack, Image, Link, Icon } from '@chakra-ui/react'
import {
    Link as ReachLink 
} from "react-router-dom";
import {
    Image,
    Flex,
    Box,
    Text
  } from '@chakra-ui/react'
import logo from './TCBuildsLogo-Cropped.svg'
import { FaHome, FaRegQuestionCircle, FaMailBulk } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi'


export default function Header() {

    return(
        <Box bgColor='#d6a8a8' position='fixed' w='100%' >
        <Box maxW='150' mx="auto">
            <Image src={logo} boxSize='100' />
        </Box>
    </Box>
    )

}