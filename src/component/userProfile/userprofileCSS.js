import styled from "styled-components";

export const Container = styled.div``;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const About = styled.div`
  font-weight: normal;
  font-size: 14px;
  width: 700px;
  color: #3c3c3c;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.type === "notAbout" ? "8px" : "16px")};
`;
export const Span = styled.span``;
export const Icon = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

export const Input1 = styled.input`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: none;
  ::placeholder {
    text-align: center;
  }
`;
export const CompanyName = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: #3c3c3c;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 8px;
`;
export const Input2 = styled.input`
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
export const Address = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #3c3c3c;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;
export const Input3 = styled.input`
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
