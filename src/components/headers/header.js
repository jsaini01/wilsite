import React from "react";
import { HeaderWraper } from "styles/components/Header";
import { Button } from "components/Buttons";
import NavWrap from "components/headers/navWrap";
import Logo from "components/headers/logo";

const AllHeader = () => (
  <HeaderWraper>
    <Logo />
    <NavWrap />
    <Button />
  </HeaderWraper>
);

export default AllHeader;
