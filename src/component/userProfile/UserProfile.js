import React from "react";
import styled from "styled-components";
import UserProfileNavBar from "../userProfileNavBar/UserProfileNavBar";
import { MdModeEdit } from "react-icons/md";

import {
  InputWrapper,
  Container,
  About,
  Title,
  Span,
  Icon,
  Input1,
  CompanyName,
  Input2,
  Address,
  Input3,
} from "./userprofileCSS";

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
