import { Divider } from "@mui/material";
import React from "react";
import Banner from "../Banner/Banner";
import Description from "../Description/Description";
import Header from "../Header/Header";
import Ideas from "../Ideas/Ideas";
import Membership from "../Membership/Membership";
import Quote from "../Quote/Quote";
import Vlogs from "../Vlogs/Vlogs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <br />
      <Divider variant="middle" />
      <br />
      <Description></Description>
      <br />
      <Divider variant="middle" />
      <br />
      <Quote></Quote>
      <br />
      <Vlogs></Vlogs>
      <br />
      <Membership></Membership>
      <br />
      <Ideas></Ideas>
    </div>
  );
};

export default Home;
