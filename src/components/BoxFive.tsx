import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d8ebb;
  margin: 1rem;
  border-radius: 10px;
  justify-content: space-between;
  padding: 4rem 6% 4rem 6%;
  ${mobile({ flexDirection: "column" })}
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: white;

  text-shadow: black 10px;
`;
const SubTitle = styled.p`
  font-family: "Inter", sans-serif;
  color: #cfcbcb;

  text-shadow: black 10px;
`;

const Email = styled.div`
  display: flex;
  gap: 1rem;
`;
const Input = styled.input`
  border: none;
  font-size: medium;
  font-family: "Inter", sans-serif;
  padding-left: 2rem;
  &:focus {
    outline: none;
  }
  color: #4e4d4d;
  height: 3rem;
  width: 25rem;
  margin: 0;
  border-radius: 5px;
  ${mobile({ width: "13rem" })}
`;

const JoinBtn = styled.button`
  width: 19%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: inherit;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 18px;
`;

const BoxFive = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Title>Want Joinedapp Demo?</Title>
          <SubTitle>Signup to our Substack for early access</SubTitle>
        </Text>
        <Email>
          <Input placeholder="Enter your Email"></Input>
          <JoinBtn>Join</JoinBtn>
        </Email>
      </Wrapper>
    </Container>
  );
};

export default BoxFive;
