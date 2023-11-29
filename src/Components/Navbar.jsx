import React from "react";
import { Flex, Box, Link, Spacer, useTheme } from "@chakra-ui/react";

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
        <Link mr={5} href="#" fontSize="md" fontWeight="normal" color="white">
          Your Portfolio
        </Link>
        <Link mr={5} href="#" fontSize="md" fontWeight="normal" color="white">
          Your Portfolio
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
