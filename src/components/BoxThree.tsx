import styled from "styled-components";
import chatbot from "../assets/chatbot.png";
import Rising from "../assets/88Rising.png";
import Analytics from "../assets/analytics.png";
import coin from "../assets/coin.png";
import { AiOutlineArrowRight } from "react-icons/ai";
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 7% 0 7%;
  ${mobile({ flexWrap: "nowrap", flexDirection: "column" })}
`;

const FirstCard = styled.div`
  position: relative;
  display: flex;
  background-color: whitesmoke;
  width: 48%;
  justify-content: space-between;
  border-radius: 5px;
  height: 270px;
  margin: 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2);

  align-items: center;
  ${mobile({ width: "100%" })}
`;
const InfoDiv = styled.div`
  margin: 15px 0px 15px 15px;
  border-radius: 10px;
  height: 90%;
  width: 60%;
  padding-left: 10px;
`;

const Img = styled.img`
  width: 34%;
  border-radius: 10px;
  height: 30%;
  object-fit: contain;
`;
const SecCard = styled.div`
  position: relative;
  display: flex;
  background-color: whitesmoke;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2);
  width: 48%;
  justify-content: space-between;
  border-radius: 5px;
  height: 270px;
  align-items: center;
  ${mobile({ width: "100%", marginTop: "30px" })}
`;
const ThirdCard = styled.div`
  position: relative;
  display: flex;
  background-color: whitesmoke;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2);
  width: 48%;
  justify-content: space-between;
  border-radius: 5px;
  height: 270px;
  align-items: center;
  margin-top: 55px;
  ${mobile({ width: "100%", marginTop: "30px" })}
`;
const FourthCard = styled.div`
  position: relative;
  display: flex;
  background-color: whitesmoke;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2);
  width: 48%;
  justify-content: space-between;
  border-radius: 5px;
  height: 270px;
  margin-top: 55px;

  align-items: center;
  ${mobile({ width: "100%", marginTop: "30px" })}
`;

const InfoPara = styled.p`
  font-family: "Inter", sans-serif;
  color: #3f4144;
  line-height: 25px;
`;

const InfoTitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
`;

const Button = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  position: absolute;
  bottom: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #555e66;
  font-size: 18px;
  cursor: pointer;
  ${mobile({ right: "10px", bottom: "2px" })}
`;

const BoxThree = () => {
  return (
    <>
      <MasterDiv>
        <Title>Why Joinedapp?</Title>
        <ContainerThree>
          <FirstCard>
            <InfoDiv>
              <InfoTitle>Powerful AI Chatbot</InfoTitle>
              <InfoPara>
                Joinedapp offers end-to-end shopping experiences through
                messaging, equipped with automated customer support FAQs.
              </InfoPara>
              <Button>
                Explore <AiOutlineArrowRight />
              </Button>
            </InfoDiv>

            <Img src={chatbot} alt="" />
          </FirstCard>
          <SecCard>
            <InfoDiv>
              <InfoTitle>Web 3.0 assets</InfoTitle>
              <InfoPara>
                A platform for brand-exclusive NFT content, VIP passes to
                brand-sponsored events included.
              </InfoPara>
              <Button>
                Explore <AiOutlineArrowRight />
              </Button>
            </InfoDiv>

            <Img src={Rising} alt="" />
          </SecCard>
          <ThirdCard>
            <InfoDiv>
              <InfoTitle>Brand coins & crypto payment</InfoTitle>
              <InfoPara>
                Empower your customers with an integrated crypto wallet. trade
                coins for purchases across channels
              </InfoPara>
              <Button>
                Explore <AiOutlineArrowRight />
              </Button>
            </InfoDiv>

            <Img src={coin} alt="" />
          </ThirdCard>

          <FourthCard>
            <InfoDiv>
              <InfoTitle>Marketing automation</InfoTitle>
              <InfoPara>
                Joinedapp offers lead generation, conversion, and re-engagement
                campaigns, along with integrated email
              </InfoPara>
              <Button>
                Explore <AiOutlineArrowRight />
              </Button>
            </InfoDiv>

            <Img src={Analytics} alt="" />
          </FourthCard>
        </ContainerThree>
      </MasterDiv>
    </>
  );
};

export default BoxThree;
