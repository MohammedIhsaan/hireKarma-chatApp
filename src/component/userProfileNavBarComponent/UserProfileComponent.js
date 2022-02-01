import React from "react";
import styled from "styled-components";
import UserProfileNavBar from "./UserProfileNavBar";
import { MdModeEdit } from "react-icons/md";

const Container = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const About = styled.div`
  font-weight: normal;
  font-size: 14px;
  width: 700px;
  color: #3c3c3c;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.type === "notAbout" ? "8px" : "16px")};
`;
const Span = styled.span``;
const Icon = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const Input1 = styled.input`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: none;
  ::placeholder {
    text-align: center;
  }
`;
const CompanyName = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: #3c3c3c;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 8px;
`;
const Input2 = styled.input`
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  ::placeholder {
    text-align: center;
  }
`;
const Address = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #3c3c3c;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;
const Input3 = styled.input`
  width: 100%;
  height: 148px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  ::placeholder {
    text-align: center;
  }
`;

export default function UserProfileComponent() {
  return (
    <Container>
      <UserProfileNavBar />
      <InputWrapper>
        <About>
          <Title>
            <Span>About</Span>
            <Icon>
              <MdModeEdit />
            </Icon>
          </Title>
          <Input1 placeholder="Enter Texts" />
        </About>
        <CompanyName>
          <Title type="notAbout">
            <Span>Company Name</Span>
            <Icon>
              <MdModeEdit />
            </Icon>
          </Title>
          <Input2 placeholder="Enter Texts" />
        </CompanyName>
        <Address>
          <Title type="notAbout">
            <Span>Address</Span>
            <Icon>
              <MdModeEdit />
            </Icon>
          </Title>
          <Input3 placeholder="Enter Texts" />
        </Address>
      </InputWrapper>
    </Container>
  );
}
