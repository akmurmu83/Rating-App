import React from "react";
import MemberScore from "./MemberScore";
import Styles from "./Day.module.css";
import {Box, Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";

function Day({ date, dayCount, members }) {
  return (
    <Box w="80%" m="auto" mb={10}>
      <h3>Day-{dayCount} ({date})</h3>
      <Table colorScheme='grey' >
        <Thead>
          <Tr style={{border: '1px solid'}}>
            <Td>Member</Td>
            {members.map((member) => (
              <Td  style={{border: '1px solid'}} key={member.id}>Score {member.id}</Td>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {members.map((member) => (
            <MemberScore name={member.name} scores={member.scores}/>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Day;
