import React from "react";
import { Link } from "react-router-dom";

function MemberScore({ name, scores }) {
  return (
    <tr  style={{border: '1px solid'}}>
      <td  style={{border: '1px solid'}}>{name}</td>
      {scores.map((score) => (
        <td style={{border: '1px solid'}} key={score.score}>{score.score}</td>
      ))}
      <td style={{border: '1px solid'}}>
        <Link to="/feedback">Feedback</Link>
      </td>
    </tr>
  );
}

export default MemberScore;
