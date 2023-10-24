import styled from "styled-components";
import vid from "../assets/vid.mp4";
import { mobile } from "../responsive";

const ContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120vh;
  align-items: center;
  padding: 0 3rem 0 6rem;
  ${mobile({ flexDirection: "column", padding: "0px", height: "140vh" })}
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ margin: "3rem 2rem 2rem 2rem" })}
`;

const Header = styled.p`
  font-size: 3rem;
  font-weight: 800;
  font-family: "Inter", sans-serif;
  margin: 0;
  color: #0b183a;
  ${mobile({ fontSize: "2rem" })}
`;

const Para = styled.p`
  font-size: 1.3rem;
  font-family: "Inter", sans-serif;
  color: #0b183a;
`;

const Video = styled.div`
  display: flex;
  height: 550px;
  margin-right: 5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px -4px #006bb7, 0 8px 10px -6px #006bb7;
  overflow: hidden;
  --tw-shadow-color: #244af0;
  ${mobile({
    margin: "0 0 0 0",
    height: "700px",
  })}
`;

const TitleBtn = styled.button`
  background-color: #006bb7;
  width: fit-content;
  padding: 15px 25px 15px 25px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 400;
  font-size: medium;
  font-family: "Inter", sans-serif;
  cursor: pointer;
`;

const BoxOne = () => {
  return (
    <ContainerOne>
      <TitleText>
        <Header>A Home for Web 3.0 commerce</Header>
        <Para>An AI-powered e-commerce solution</Para>
        <TitleBtn>Request a Demo</TitleBtn>
      </TitleText>
      <Video>
        <video width="100%" height="100%" muted autoPlay loop src={vid}></video>
      </Video>
    </ContainerOne>
  );
};

export default BoxOne;
