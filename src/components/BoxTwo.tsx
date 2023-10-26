import styled from "styled-components";
import cardtwo from "../assets/cardtwo.jpg";
import cardthree from "../assets/cardthree.jpg";
import centrecard from "../assets/centrecard.png";
import cardone from "../assets/cardone.jpg";
import bubbleblue from "../assets/bubble/bubble5.svg";
import bubbleteal from "../assets/bubble/bubble6.svg";
import bubblewhite from "../assets/bubble/bubble3.svg";
import { mobile } from "../responsive";

const ContainerTwo = styled.div`
  position: relative;
  transform-style: preserve-3d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 7%;
  ${mobile({ height: "60vh", marginTop: "4rem" })}
`;

const Bubble = styled.div`
  box-shadow: rgba(249, 247, 247, 0.17) 0px -23px 25px 0px inset,
    rgba(251, 247, 247, 0.15) 0px -36px 30px 0px inset,
    rgba(211, 208, 208, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(225, 213, 213, 0.09) 0px 4px 2px,
    rgba(49, 49, 49, 0.09) 0px 8px 4px, rgba(57, 54, 54, 0.09) 0px 16px 8px;

  border-radius: 100%;
  padding: 20px 22px 20px 22px;
  background-color: #b80404;
  position: fixed;
  right: 25rem;
  bottom: 1rem;

  transform: translateZ(+30px) scale(1);
`;

const Top = styled.div`
  display: flex;
  margin-top: 7%;
`;
const Bottom = styled.div``;
const ImgCentre = styled.img`
  background-image: radial-gradient(
    circle farthest-side at var(--x, 102px) var(--y, 92px),
    #1250aa 50%,
    transparent 85%
  );
  ${mobile({ height: "60px", backgroundImage: "none" })}
`;

const Img = styled.img`
  border-radius: 10px;
  ${mobile({ height: "60px" })}
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 40px;
  font-family: "Inter", sans-serif;
  margin: 10px;
  color: #0b183a;
  display: flex;
  ${mobile({
    fontSize: "24px",
    fontWeight: "600",
    padding: "2rem 2rem 0 2rem",
  })}
`;

const BtmText = styled.p`
  font-size: "50px";
  font-family: "Inter", sans-serif;
  margin: 10px;
  color: #0b183a;
  display: flex;
`;

const ImgBubble = styled.img`
  transform: translateZ(+30px) scale(1);
  position: absolute;
  ${mobile({ display: "none" })}
`;

const BoxTwo = () => {
  return (
    <ContainerTwo>
      <ImgBubble
        style={{
          left: "20rem",
          height: "35px",
          top: "28rem",
        }}
        src={bubbleblue}
      />
      <ImgBubble
        style={{ right: "19vw", top: "18rem", height: "3.5rem" }}
        src={bubbleteal}
      />
      <ImgBubble
        style={{ left: "3rem", top: "18rem", height: "8rem" }}
        src={bubblewhite}
      />
      <ImgBubble
        style={{ right: "3rem", top: "33rem", height: "5rem" }}
        src={bubbleteal}
      />
      <ImgBubble
        style={{ right: "10rem", top: "30rem", height: "14px" }}
        src={bubbleblue}
      />
      <ImgBubble
        style={{ right: "9rem", top: "31.5rem", height: "14px" }}
        src={bubblewhite}
      />

      <Text>Powered by our Web3.0 e-commerce middleware</Text>
      <BtmText>
        Joinedapp enables a universe of experiences & digital storefronts across
        all channels
      </BtmText>
      <Top>
        <div>
          <Img src={cardone} />
        </div>
        <div>
          <ImgCentre src={centrecard} />
        </div>
        <div>
          <Img src={cardtwo} />
        </div>
      </Top>
      <Bottom>
        <Img src={cardthree} />
      </Bottom>
    </ContainerTwo>
  );
};

export default BoxTwo;
