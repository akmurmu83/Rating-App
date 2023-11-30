import React from "react";
import MemberScore from "./MemberScore";
import {
  Box,
  Divider,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

function Day({ date, dayCount, members }) {
  let theme = useTheme();
  return (
    <>
      <Box w="80%" m="auto" border="1px solid" mb={5}>
        <Text fontSize="2xl" p={2}>
          Day-{dayCount} ({date})
        </Text>
        <Table colorScheme="grey">
          <Thead>
            <Tr style={{ border: "1px solid" }}>
              <Td>Member</Td>
              {members.map((member) => (
                <Td style={{ border: "1px solid" }} key={member.id}>
                  Score {member.id}
                </Td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {members.map((member) => (
              <MemberScore name={member.name} scores={member.scores} />
            ))}
          </Tbody>
        </Table>
      </Box>
      <Divider m="auto" mb={5} w="80%" />
    </>
  );
}

export default Day;
