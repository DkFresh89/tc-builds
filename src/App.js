// import logo from './logo.svg';
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
        {/* <Logo /> */}
        <Image src={logo} />
      </Box>
      {/* <SearchField mb={6} /> */}
      <Stack spacing={6}>
        <Stack>
          {/* <NavLink label="People" icon={FaUser} isActive />
          <NavLink label="Favorites" icon={FaRegHeart} />
          <NavLink label="Workflow" icon={FaRegPaperPlane} />
          <NavLink label="Statistics" icon={FaRegChartBar} /> */}
        </Stack>
        <Divider borderColor="whiteAlpha.400" />
        <Stack>
          {/* <NavLink label="Notifications" icon={FaRegBell} />
          <NavLink label="Help Center" icon={FaRegQuestionCircle} /> */}
        </Stack>
      </Stack>
      <Spacer />
      {/* <UserProfile
        name="Cindy Winston"
        image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        email="cindy@example.com"
      /> */}
    </Flex>
  );
}

export default App;
