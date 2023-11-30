import React from "react";
import { GrUserAdmin } from "react-icons/gr";
import { Icon } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Link,
  Spacer,
  useTheme,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";

function Navbar() {
  const theme = useTheme(); // Access the Chakra UI theme
  return (
    <Flex bg={theme.colors.primary[500]} p={4} align="center" position='sticky' top='0'>
      <Flex
        textAlign={["left", , "right"]}
        w={[, , "60%", , ,]}
        // border="1px solid"
        direction={["column", , "row"]}
        lineHeight={1}
      >
        <Link href="#" fontSize="xl" fontWeight="bold" color="white">
          Rating App
        </Link>
        <Spacer />
        <Text fontSize="xl">21 Day Impromptu Challenge</Text>
      </Flex>
      <Spacer />
      <Box>
        <ButtonGroup gap="2" variant="solid">
          <Button size={["sm", "sm", "md", "md", "lg"]} colorScheme="green">
            Sign up
          </Button>
          <Button size={["sm", "sm", "md", "md", "lg"]} colorScheme="orange">
            <Icon as={GrUserAdmin} mr={1} />
            Admin's Corner
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default Navbar;
