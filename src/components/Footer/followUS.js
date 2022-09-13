import React from "react";

import {
  Follow,
  FollowUSWraper,
  IconsWrap,
  Content,
  InputWraper,
  Mail,
  Inputmail,
} from "styles/components/Footer/index";
import { SubmitButton } from "components/Buttons";
import mail from "assets/images/mail.svg";
import Svgindeed from "assets/svg/indeed";
import SvgFacebook from "assets/svg/facebook";
import Svgyoutube from "assets/svg/youtube";
import SvgTwiter from "assets/svg/twiter";

const FollowUS = () => (
  <FollowUSWraper>
    <Follow>
      Follow Us
      <IconsWrap>
        <Svgindeed color="white"  />
        <SvgFacebook color="white" />
        <SvgTwiter color="white" />
        <Svgyoutube color="white" />
      </IconsWrap>
    </Follow>

    <Content>Subscribe to Our Newsletter</Content>

    <InputWraper>
      <Mail src={mail} alt="mail" />
      <Inputmail placeholder="Enter Your Email" type="email" />
      <SubmitButton />
    </InputWraper>
  </FollowUSWraper>
);

export default FollowUS;
