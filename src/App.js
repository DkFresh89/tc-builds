import { Box, Divider, Flex, Spacer, Stack, Image } from '@chakra-ui/react'
import './App.css';
import logo from './TCLogo.svg'

function App() {
  return (
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
          {/* <NavLink label="People" icon={FaUser} isActive />
          <NavLink label="Favorites" icon={FaRegHeart} /> */}
        </Stack>
        <Divider borderColor="whiteAlpha.400" />
        <Stack>
          {/* <NavLink label="Notifications" icon={FaRegBell} />
          <NavLink label="Help Center" icon={FaRegQuestionCircle} /> */}
        </Stack>
      </Stack>
      <Spacer />
    </Flex>
  );
}

export default App;
