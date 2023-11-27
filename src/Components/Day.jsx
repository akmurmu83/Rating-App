import React from "react";
import MemberScore from "./MemberScore";

function Day({ dayCount, members }) {
  return (
    <div>
      <h3>Day-{dayCount}</h3>
      <table>
        <thead>
          <tr>
            <td>Member</td>
            {members.map((member) => (
              <td key={member.id}>Score {member.id}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <MemberScore name={member.name} scores={member.scores}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
