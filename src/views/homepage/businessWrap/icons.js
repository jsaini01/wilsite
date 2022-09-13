

import React from "react";

import {
  IconWrap,
  FollowUS,
  Line,
  SvgWraper,
} from "styles/views/homepage/business";

import Svgindeed from "assets/svg/indeed";
import SvgFacebook from "assets/svg/facebook";
import Svgtwiter from "assets/svg/twiter";
import Svgyoutube from "assets/svg/youtube";

const Icons = () => (
  <IconWrap>
    <FollowUS>Follow US</FollowUS>
    <Line></Line>
    <SvgWraper>
      <Svgindeed color="black" />
      <SvgFacebook color="black" />
      <Svgtwiter color="black" />
      <Svgyoutube color="black" />
    </SvgWraper>
  </IconWrap>
);

export default Icons;
