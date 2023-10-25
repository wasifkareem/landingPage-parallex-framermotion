import styled from "styled-components";
import logoo from "../assets/logoo.png";
import { mobile } from "../responsive";

const Nav = styled.div`
  height: 4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 5rem 0rem 4rem;
  ${mobile({ padding: "0.5rem 2rem 0rem 2rem" })}
`;

const Logo = styled.div`
  display: flex;
`;
const ButtonSec = styled.div`
  display: flex;
  gap: 6rem;
  ${mobile({ display: "none" })}
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  font-size: medium;
  color: #595a5d;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img style={{ height: "2.7rem" }} src={logoo} />
      </Logo>
      <ButtonSec>
        <Button>Home</Button>
        <Button>Blog</Button>
        <Button>Team</Button>
        <Button>More</Button>
      </ButtonSec>
    </Nav>
  );
};

export default Navbar;
