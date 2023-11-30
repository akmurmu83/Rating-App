import { Td, Tr, Link as ChakraLink} from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

function MemberScore({ name, scores }) {
  return (
    <Tr>
      <Td>{name}</Td>
      {scores.map((score) => (
        <Td key={score.score}>
          {score.score}
        </Td>
      ))}
      <Td>
      <ChakraLink
          as={ReactRouterLink}
          to="/feedback"
          _hover={{ textDecoration: "underline", color: 'teal' }}
        >
        Feedback
      </ChakraLink>
      </Td>
    </Tr>
  );
}

export default MemberScore;
