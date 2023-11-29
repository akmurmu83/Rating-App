import React from "react";
import { Flex, Box, Link, Spacer, useTheme, Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  const theme = useTheme(); // Access the Chakra UI theme
  return (
    <Flex bg={theme.colors.primary[500]} p={4}>
      <Box ml={4}>
        <Link href="#" fontSize="xl" fontWeight="bold" color="white">
          Rating App
        </Link>
      </Box>
      <Spacer />
      <Box>
      <ButtonGroup gap='2' variant="solid">
      <Button colorScheme='green'>Sign up</Button>
      <Button colorScheme='orange'>Admin's Corner</Button>
    </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default Navbar;
