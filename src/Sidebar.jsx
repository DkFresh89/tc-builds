import { Box, Divider, Flex, Spacer, Stack, Image, Link } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReachLink 
} from "react-router-dom";
import logo from './TCLogo.svg'


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
        <Box mb={8}>
          <Image src={logo} />
        </Box>
        <Stack spacing={6}>
          <Stack>
          <Link as={ReachLink} to="/about">
            About Us
          </Link>
          </Stack>
          <Divider borderColor="whiteAlpha.400" />
          <Stack>
            {/* <NavLink label="Notifications" icon={FaRegBell} />
            <NavLink label="Help Center" icon={FaRegQuestionCircle} /> */}
          </Stack>
        </Stack>
        <Spacer />
      </Flex>
    )

}