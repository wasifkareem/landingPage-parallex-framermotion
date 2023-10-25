import styled from "styled-components";
import vid from "../assets/vid.mp4";
import xnft from "../assets/xnft.png";
import bitcoin from "../assets/bitcoin.png";
import logopic from "../assets/logopic.png";
import { mobile } from "../responsive";

const ContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120vh;
  align-items: center;
  padding: 0 3rem 0 6rem;
  ${mobile({ flexDirection: "column", padding: "0px", height: "140vh" })}
  position: relative;
  transform-style: preserve-3d;
`;

const Bubble = styled.div`
  box-shadow: rgba(249, 247, 247, 0.17) 0px -23px 25px 0px inset,
    rgba(251, 247, 247, 0.15) 0px -36px 30px 0px inset,
    rgba(211, 208, 208, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(225, 213, 213, 0.09) 0px 4px 2px,
    rgba(49, 49, 49, 0.09) 0px 8px 4px, rgba(57, 54, 54, 0.09) 0px 16px 8px;

  border-radius: 100%;
  padding: 0.9rem;
  background-color: aqua;
  position: fixed;
  right: 12.2rem;
  top: 16rem;

  transform: translateZ(30px) scale(1);
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
  color: #ffffff;
  font-weight: 400;
  font-size: medium;
  font-family: "Inter", sans-serif;
  cursor: pointer;
`;

const BoxOne = () => {
  return (
    <ContainerOne>
      <Bubble
        style={{
          backgroundColor: "rgb(5, 5, 5)",
          padding: "5px 8px 5px 8px ",
          top: "24rem",
        }}
      >
        <img style={{ height: "20px" }} src={logopic} alt="" />
      </Bubble>
      <Bubble
        style={{
          right: "87vw",
          top: "30rem",
          padding: "2rem 2.2rem 2rem 2.2rem",
          backgroundColor: "#ddddd8",
        }}
      >
        <img style={{ height: "40px" }} src={bitcoin} alt="" />
      </Bubble>
      <Bubble
        style={{
          backgroundColor: "#58b5f3",
          right: "8rem",
          top: "14rem",
          padding: "0.5rem",
        }}
      ></Bubble>
      <Bubble
        style={{
          backgroundColor: "#240280dd",
          right: "6rem",
          padding: "0.9rem",
        }}
      ></Bubble>
      <Bubble
        style={{
          right: "26rem",
          top: "38rem",
          backgroundColor: "#04047ff3",
          padding: "1rem 1.2rem 1rem 1.2rem",
        }}
      >
        <img style={{ height: "40px" }} src={xnft} alt="" />
      </Bubble>

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
