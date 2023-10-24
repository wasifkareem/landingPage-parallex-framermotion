import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: #e2e8f4;
  margin: 0 1rem 0 1rem;
  border-radius: 1rem;
  padding-bottom: 12%;
  ${mobile({ paddingBottom: "1rem" })}
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 10% 0 10%;
  /* ${mobile({ padding: "1rem", gridTemplateColumns: "auto auto" })} */
`;
const GridItems = styled.div`
  border: 1px solid;
  margin: 2px;
  text-align: center;
  background-color: #0b183a;
  &:hover {
    background-color: #3b4c79;
  }
`;

const Title = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 550;
  text-align: center;
  color: #0b183a;
  margin: 0;
  padding: 5% 0 10% 0;
`;

const Img = styled.img`
  ${mobile({ height: "50px" })}
`;

const BoxFour = () => {
  return (
    <Container>
      <Title>Partners</Title>
      <Grid>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_d673981e4e4f4bc7af906c1ee009e5f6~mv2.png/v1/fill/w_205,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75ea32_d673981e4e4f4bc7af906c1ee009e5f6~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_35fcefcd99284645a434275488497a88~mv2.png/v1/fill/w_224,h_157,al_c,q_85,enc_auto/75ea32_35fcefcd99284645a434275488497a88~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_57e3632de24642deba0ec4597d348afc~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_57e3632de24642deba0ec4597d348afc~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_ec09059f3063460197333eb3d82d9923~mv2.png/v1/fill/w_224,h_156,al_c,q_85,enc_auto/75ea32_ec09059f3063460197333eb3d82d9923~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_02d406907e3a424794a2c0361ad13abe~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_02d406907e3a424794a2c0361ad13abe~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_63df60db7a1d4adb99eb94ae1431e549~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_63df60db7a1d4adb99eb94ae1431e549~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_ae9980574c3f4baf808c6044f1d862e9~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_ae9980574c3f4baf808c6044f1d862e9~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_5e79f6985a0b4e4e94801fea685ef2b5~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_5e79f6985a0b4e4e94801fea685ef2b5~mv2.png"
            alt=""
          />
        </GridItems>
        <GridItems>
          <Img
            src="https://static.wixstatic.com/media/75ea32_d8d3e0b5526d43a491ea200cee340e3b~mv2.png/v1/fill/w_224,h_160,al_c,q_85,enc_auto/75ea32_d8d3e0b5526d43a491ea200cee340e3b~mv2.png"
            alt=""
          />
        </GridItems>
      </Grid>
    </Container>
  );
};

export default BoxFour;
