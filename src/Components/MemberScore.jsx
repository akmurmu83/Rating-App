import React from "react";
import { Link } from "react-router-dom";

function MemberScore({ name, scores }) {
  return (
    <tr>
      <td>{name}</td>
      {scores.map((score) => (
        <td key={score.score}>{score.score}</td>
      ))}
      <td>
        <Link to="/feedback">Feedback</Link>
      </td>
    </tr>
  );
}

export default MemberScore;
