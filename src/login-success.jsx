import styled from "styled-components";
import { LoginBox } from "./routes/login";

export default function Loginsuccess() {
  return (
    <LoginBox>
      <LoginWrapper>
      <h5>로그인 성공⭐</h5>
      <ButtonWrapper>
        <button><a href="/posts"> Go to Post</a></button>
      </ButtonWrapper>
      </LoginWrapper>
    </LoginBox>
  )
}

export const LoginWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 200px;
gap: 10px;
height: auto;
width: 200px;
background-color: #ffffff;
border-radius:15px;
padding: 40px;
padding-top: 10px;
margin-top: 60px;

h3 {
  display: flex;
  justify-content: center;
  align-items: center;
};

hr {
    width:100%;
    color: #181818;
  };
`;


export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 220px;
    background-color: #8caec7;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    
    a {
      color: #ffffff;
    };

    &:hover {
      background-color: #738fa3;
    };
  };
`;


