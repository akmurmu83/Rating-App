import React, { useEffect, useState } from "react";
import Day from "../Components/Day";
import {Box} from "@chakra-ui/react"

function Homepage() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch(`http://localhost:3001/days`);
        let data = await res.json();
        console.log("data", data);
        setDays(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  let currDay = 1;
  return (
    <Box>
      <h1>Homepage</h1>
      {days.map((day)=> <Day key={day.id} date={day.date} dayCount={`0${currDay++}`} members={day.members}/>)}
    </Box>
  );
}

export default Homepage;
