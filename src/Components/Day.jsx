import React from "react";
import MemberScore from "./MemberScore";

function Day({ date, dayCount, members }) {
  return (
    <div>
      <h3>Day-{dayCount} ({date})</h3>
      <table style={{border: '1px solid', margin:'auto', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{border: '1px solid'}}>
            <td>Member</td>
            {members.map((member) => (
              <td  style={{border: '1px solid'}} key={member.id}>Score {member.id}</td>
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
