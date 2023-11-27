import React, { useEffect, useState } from "react";
import Day from "../Components/Day";

function Homepage() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch(`http://localhost:3001/days`);
        let data = await res.json();
        console.log("data", data);
        setDays(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      {days.map((day)=> <Day key={day.id} dayCount={days.length} members={day.members}/>)}
    </div>
  );
}

export default Homepage;
