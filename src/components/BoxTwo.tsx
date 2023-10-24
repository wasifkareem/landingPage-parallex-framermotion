import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import cardtwo from "../assets/cardtwo.jpg";
import cardthree from "../assets/cardthree.jpg";
import centrecard from "../assets/centrecard.png";
import cardone from "../assets/cardone.jpg";
import { mobile } from "../responsive";

const ContainerTwo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 7%;
  ${mobile({ height: "60vh", marginTop: "4rem" })}
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

const BoxTwo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const rightShift = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const leftShift = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const upShift = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  return (
    <ContainerTwo ref={containerRef}>
      <Text>Powered by our Web3.0 e-commerce middleware</Text>
      <BtmText>
        Joinedapp enables a universe of experiences & digital storefronts across
        all channels
      </BtmText>
      <Top>
        <motion.div style={{ translateX: rightShift }}>
          <Img src={cardone} />
        </motion.div>
        <motion.div>
          <ImgCentre src={centrecard} />
        </motion.div>
        <motion.div style={{ translateX: leftShift }}>
          <Img src={cardtwo} />
        </motion.div>
      </Top>
      <Bottom as={motion.div} style={{ translateY: upShift }}>
        <Img src={cardthree} />
      </Bottom>
    </ContainerTwo>
  );
};

export default BoxTwo;
