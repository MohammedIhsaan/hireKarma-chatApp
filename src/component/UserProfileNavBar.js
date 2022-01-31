import React from "react";
import styled from "styled-components";
import user from "../Images/user.png";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: #303c6c;
  border-radius: 0px 0px 20px 20px;
  color: #ffffff;
  margin-left: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding-right: 20px;
  padding-left: 30px;
  cursor: pointer;
`;
const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const UserEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EmailIcon = styled.div`
  font-size: 20px;
  padding-right: 18px;
  display: flex;
  align-items: center;
`;
const Email = styled.span`
  font-weight: normal;
  font-size: 20px;
`;
const UserPhoneNumber = styled.div`
  display: flex;
`;
const PhoneIcon = styled.div`
  padding-right: 24px;
  font-size: 20px;
`;
const PhoneNumber = styled.span`
  font-weight: normal;
  font-size: 20px;
`;
const EditIcon = styled.div`
  font-size: 24px;
  padding-right: 60px;
  cursor: pointer;
`;

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
