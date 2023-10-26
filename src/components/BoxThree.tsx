import styled from "styled-components";
import chatbot from "../assets/chatbot.png";
import nft from "../assets/nft.png";
import wallet from "../assets/wallet.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import bubble1 from "../assets/bubble/bubble1.svg";

import { mobile } from "../responsive";

const MasterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-image: radial-gradient(
    circle closest-side at var(--x, 50%) var(--y, 50%),
    #53c0eb -100%,
    transparent 100%
  );
  padding-bottom: 20%;
  position: relative;
  transform-style: preserve-3d;
`;

const Title = styled.p`
  font-family: "Inter", sans-serif;
  padding: 0 3% 0 3%;
  font-size: 40px;
  font-weight: 550;
  text-align: center;
  margin: 5rem 0 6rem 0;
  color: #0b183a;
  ${mobile({ fontSize: "30px" })}
`;
const ContainerThree = styled.div`
  gap: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 7% 0 7%;
`;

const FirstCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  height: 80vh;
  margin-bottom: 50px;

  align-items: center;
  ${mobile({ width: "100%" })}
`;
const InfoDiv = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffc813;
  width: 45vw;
  border-radius: 20px;
  height: 93vh;
`;

const Img = styled.img`
  width: 38vw;
  border-radius: 20px;
  object-fit: cover;
`;

const InfoPara = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #181b21;

  line-height: 34px;
  display: flex;
  width: 65%;
`;

const InfoTitle = styled.div`
  display: flex;
  color: #181b21;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 30px;
  width: 65%;
  display: flex;
`;

const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  position: absolute;
  bottom: 35px;
  font-family: "Inter", sans-serif;
  border: none;
  background-color: #006bb7;
  padding: 1rem 1.3rem 1rem 1.3rem;
  border-radius: 8px;
  right: 2.4rem;

  font-weight: 500;
  color: white;
  font-size: 18px;
  cursor: pointer;
  ${mobile({ right: "10px", bottom: "2px" })}
`;
const ImgBubble = styled.img`
  transform: translateZ(+30px) scale(2);
  position: absolute;
  left: 10rem;
  top: 10rem;
`;
const BoxThree = () => {
  return (
    <>
      <MasterDiv>
        <ImgBubble src={bubble1} />
        <Title>Why Joinedapp?</Title>
        <ContainerThree>
          <FirstCard>
            <InfoDiv>
              <InfoTitle>Powerful AI Chatbot</InfoTitle>
              <InfoPara>
                JoinedApp Chatbot - your seamless solution for effortless order
                placement directly within your favorite social media platforms
                like Instagram, WhatsApp, and Facebook Messenger. Say goodbye to
                the hassle of navigating through multiple screens and apps. With
                JoinedApp's intuitive chatbot, customers can now effortlessly
                book orders with just a few simple messages.
              </InfoPara>
            </InfoDiv>

            <Img
              style={{ height: "93vh", objectPosition: "-30rem" }}
              src={chatbot}
              alt=""
            />
          </FirstCard>
          <FirstCard>
            <Img style={{ height: "93vh" }} src={nft} alt="" />
            <InfoDiv style={{ backgroundColor: "#7dde92" }}>
              <InfoTitle>Web 3.0 assets</InfoTitle>
              <InfoPara>
                A platform for brand-exclusive NFT content, VIP passes to
                brand-sponsored events included.
              </InfoPara>
            </InfoDiv>
          </FirstCard>
          <FirstCard>
            <InfoDiv style={{ backgroundColor: "#fc34f2" }}>
              <InfoTitle>Brand coins & crypto payment</InfoTitle>
              <InfoPara>
                Empower your customers with an integrated crypto wallet. trade
                coins for purchases across channels
              </InfoPara>
            </InfoDiv>

            <Img style={{ height: "93vh" }} src={wallet} alt="" />
          </FirstCard>
        </ContainerThree>
      </MasterDiv>
    </>
  );
};

export default BoxThree;
