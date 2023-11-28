import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Styles from "./MemberScore.module.css";

function MemberScore({ name, scores }) {
  return (
    <Tr className={Styles.tr}>
      <Td style={{ border: "1px solid" }}>{name}</Td>
      {scores.map((score) => (
        <Td style={{ border: "1px solid" }} key={score.score}>
          {score.score}
        </Td>
      ))}
      <Td style={{ border: "1px solid" }}>
        <Link to="/feedback">Feedback</Link>
      </Td>
    </Tr>
  );
}

export default MemberScore;
