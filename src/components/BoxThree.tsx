import styled from "styled-components";
import chatbot from "../assets/chatbot.png";
import nft from "../assets/nft.png";
import wallet from "../assets/wallet.jpg";
import rockstar from "../assets/88rising.jpeg";
import rising from "../assets/88Rising.jpg";
import bubbleorange from "../assets/bubble/bubble1.svg";
import bubblegreen from "../assets/bubble/bubble2.svg";
import bubbleteal from "../assets/bubble/bubble6.svg";
import bubbleblue from "../assets/bubble/bubble5.svg";
import bubblewhite from "../assets/bubble/bubble3.svg";
import { BsBoxArrowRight } from "react-icons/bs";
import { mobile } from "../responsive";

const MasterDiv = styled.div`
  display: flex;
  flex-direction: column;

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

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  height: 80vh;
  margin-bottom: 50px;

  align-items: center;
  ${mobile({
    width: "100%",
    flexDirection: "column",
    marginBottom: "0px",
    height: "120vh",
  })}
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
  ${mobile({
    width: "95vw",
    height: "70vh",
  })}
`;

const Img = styled.img`
  width: 38vw;
  border-radius: 20px;
  object-fit: cover;
  ${mobile({
    width: "95vw",
    marginTop: "14px",
  })}
`;

const InfoPara = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #181b21;

  line-height: 34px;
  display: flex;
  width: 65%;
  ${mobile({
    fontSize: "18px",
    lineHeight: "20px",
    width: "90%",
  })}
`;

const InfoTitle = styled.div`
  display: flex;
  color: #181b21;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 30px;
  width: 65%;
  display: flex;
  ${mobile({
    fontSize: "20px",
  })}
`;

const GridBox = styled.div`
  box-shadow: 1px 5px 1px 1px black;

  background-color: #fcf2df;
  width: 38vw;
  border-radius: 20px;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    width: "95vw",
    marginBottom: "20px",
  })}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: inherit;
  border-radius: 20px;
  width: fit;
  height: fit;
  ${mobile({
    width: "20vw",
  })}
`;

const GridItem = styled.img`
  margin: 0.5rem;
  border-radius: 16px;
  object-fit: cover;
`;

const GridBtn = styled.div`
  background-color: #efeded;
  margin: 0.5rem;
  border-radius: 16px;
  object-fit: cover;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  padding-top: 2rem;
  border: 3px solid #6e52ef;
  overflow: hidden;
  color: #181b21;
  font-family: "Inter", sans-serif;
`;

const ImgBubble = styled.img`
  transform: translateZ(+30px) scale(2);
  position: absolute;
  right: 10rem;
  top: 40rem;
  ${mobile({
    display: "none",
  })}
`;
const BoxThree = () => {
  return (
    <>
      <MasterDiv>
        <ImgBubble
          style={{ height: "2.4rem", top: "50vh" }}
          src={bubbleorange}
        />
        <ImgBubble
          style={{ height: "0.9rem", right: "38.4rem", top: "40rem" }}
          src={bubblegreen}
        />
        <ImgBubble
          style={{ height: "0.4rem", right: "89vw", top: "16rem" }}
          src={bubbleteal}
        />{" "}
        <ImgBubble
          style={{ height: "0.5rem", right: "88vw", top: "15rem" }}
          src={bubbleblue}
        />
        <ImgBubble
          style={{ height: "2rem", right: "80vw", top: "205vh" }}
          src={bubblegreen}
        />
        <ImgBubble
          style={{ height: "2rem", right: "90vw", top: "170vh" }}
          src={bubbleorange}
        />{" "}
        <ImgBubble
          style={{ height: "0.5rem", right: "86vw", top: "160vh" }}
          src={bubbleteal}
        />
        <ImgBubble
          style={{ height: "1rem", right: "13vw", top: "190vh" }}
          src={bubbleteal}
        />{" "}
        <ImgBubble
          style={{ height: "2rem", right: "22vw", top: "250vh" }}
          src={bubblewhite}
        />
        <Title>Why Joinedapp?</Title>
        <ContainerThree>
          <Card>
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
          </Card>
          <Card>
            <GridBox>
              <Grid>
                <GridItem
                  style={{
                    height: "28vh",
                    width: "30vh",
                  }}
                  src={nft}
                  alt=""
                />

                <GridItem
                  style={{ height: "28vh", width: "30vh" }}
                  src={rising}
                  alt=""
                />

                <GridItem
                  style={{ height: "28vh", width: "30vh" }}
                  src={rockstar}
                  alt=""
                />

                <GridBtn>
                  <p>Explore</p>
                  <BsBoxArrowRight
                    style={{
                      fontSize: "20px",

                      border: "1px dashed ",
                      borderRadius: "100%",
                      padding: "10px",
                      color: "#6b6e74",
                    }}
                  />
                </GridBtn>
              </Grid>
            </GridBox>

            <InfoDiv style={{ backgroundColor: "#7dde92" }}>
              <InfoTitle>Web 3.0 assets</InfoTitle>
              <InfoPara>
                A platform for brand-exclusive NFT content, VIP passes to
                brand-sponsored events included.
              </InfoPara>
            </InfoDiv>
          </Card>
          <Card>
            <InfoDiv style={{ backgroundColor: "#fc34f2" }}>
              <InfoTitle>Brand coins & crypto payment</InfoTitle>
              <InfoPara>
                Empower your customers with an integrated crypto wallet. trade
                coins for purchases across channels
              </InfoPara>
            </InfoDiv>

            <Img style={{ height: "93vh" }} src={wallet} alt="" />
          </Card>
        </ContainerThree>
      </MasterDiv>
    </>
  );
};

export default BoxThree;
