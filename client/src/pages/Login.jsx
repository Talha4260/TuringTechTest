import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar_login';
const Container = styled.div`
  background-color: #F6F8FA;
  height: 100vh;
`;

const LoginBox = styled.div`
  margin: 0 auto;
  margin-top: 10%;
  padding: 20px;
  background-color: white;
  width: 300px;
  border-radius: 5px;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Login = () => {

    const handleLogin = () => {
        window.location = "/Main"
      };
  return (
    
    <Container>
      <Navbar />
      <LoginBox>
        <h2>Login</h2>
        <Label>
        <Logo src={process.env.PUBLIC_URL + "/assets/user.png"} />
          Username<span>*</span>
        </Label>
        <Input type="text" name="username" required />
        <Label>
        <Logo src={process.env.PUBLIC_URL + "/assets/lock.png"} />
          Password<span>*</span>
        </Label>
        <Input type="password" name="password" required />
        <Button onClick={handleLogin}>Login</Button>
      </LoginBox>
    </Container>
  );
};

export default Login;