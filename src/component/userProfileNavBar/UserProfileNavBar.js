import React from "react";
import styled from "styled-components";
import user from "../../Images/user.png";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

import {
  Container,
  UserProfile,
  UserImg,
  UserName,
  UserEmail,
  EmailIcon,
  Email,
  UserPhoneNumber,
  PhoneIcon,
  PhoneNumber,
  EditIcon,
} from "./userProfileNavBarCss";

export default function UserProfileNavBar() {
  return (
    <Container>
      <UserProfile>
        <UserImg src={user} />
        <UserName>Tony Strak</UserName>
      </UserProfile>
      <UserEmail>
        <EmailIcon>
          <IoMdMail />
        </EmailIcon>
        <Email>strak.tony121@gmail.com</Email>
      </UserEmail>
      <UserPhoneNumber>
        <PhoneIcon>
          <BsTelephoneFill />
        </PhoneIcon>
        <PhoneNumber>+91 7077783877</PhoneNumber>
      </UserPhoneNumber>
      <EditIcon>
        <MdModeEdit />
      </EditIcon>
    </Container>
  );
}
