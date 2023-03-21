import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>
          <Link to={"/"}>Ziblog</Link>
        </Logo>
        <Lista>
          <Item>
            <Link to={"/"}>Home</Link>
          </Item>
          <ButtonItem>
            <Link to={"/newpost"}>New post</Link>
          </ButtonItem>
         
        </Lista>
      </NavBar>
    </HeaderContainer>
  );
}

//*Styles

const HeaderContainer = styled.header`
  background-color: #111111;
  padding: 1.5rem 2rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Lista = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  font-weight: 700;
  opacity: 0.7;
  transition: 0.3s;
  font-size: 1.1rem;

  :hover {
    opacity: 1;
  }
`;
const ButtonItem = styled.li`
  list-style: none;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;
