import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: #303c6c;
  border-radius: 0px 0px 20px 20px;
  color: #ffffff;
  margin-left: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding-right: 20px;
  padding-left: 30px;
  cursor: pointer;
`;
export const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
export const UserEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EmailIcon = styled.div`
  font-size: 20px;
  padding-right: 18px;
  display: flex;
  align-items: center;
`;
export const Email = styled.span`
  font-weight: normal;
  font-size: 20px;
`;
export const UserPhoneNumber = styled.div`
  display: flex;
`;
export const PhoneIcon = styled.div`
  padding-right: 24px;
  font-size: 20px;
`;
export const PhoneNumber = styled.span`
  font-weight: normal;
  font-size: 20px;
`;
export const EditIcon = styled.div`
  font-size: 24px;
  padding-right: 60px;
  cursor: pointer;
`;
