import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #ccc;
  margin-left: 8%;
  margin-right: 8%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Heading = styled.div`
  font-size: 24px;
  font-weight: normal;
  margin: 20px;
  margin-top: 50px;
  margin-left: 12%;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <img
              src={`${process.env.PUBLIC_URL}/assets/ttlogo.png`}
              alt="Turing Technologies Logo"
              height="30"
              className="navbar-logo"
            />
          </Left>
        </Wrapper>
      </Container>
      <Heading>Turing Technologies Frontend Test</Heading>
    </>
  )
}

export default Navbar;
