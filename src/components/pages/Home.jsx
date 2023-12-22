import React from "react";
import Statistics from "../molecules/Statistics";
import Buddies from "../organisms/Buddies";
import { Wrapper } from "../../styled/common";

function Home() {
  return (
    <Wrapper>
      <h2>Statistics</h2>
      <Statistics />
      <h2>Longest Working Buddies</h2>
      <Buddies />
    </Wrapper>
  );
}

export default Home;
