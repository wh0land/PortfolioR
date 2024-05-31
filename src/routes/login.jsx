import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import api from "./api";

export default function Login() {

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
    };
  const handlePwChange = (e) => {
    setPw(e.target.value);
    };

  const loginOk = async () => {
    try{
      const response = await api.post("/dj/login/", {
        username: id,
        password: pw,
      });
      console.log(response.data);
      localStorage.setItem("access", response.data.access);

      //회원가입 성공시
      navigate('/loginsuccess');

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <LoginBox>
          <LoginWrapper>
            <h3>로그인</h3>
            <InputBox
              placeholder="아이디를 입력하세요."
              value={id}
              onChange={handleIdChange}
            />
            <InputBox
              placeholder="비밀번호를 입력하세요."
              value={pw}
              onChange={handlePwChange}
            />        
            <ButtonWrapper>
              <button onClick={loginOk}>Login</button>
            </ButtonWrapper>
            <hr/>
            <BottomDiv>
              <h6>계정이 없으세요?</h6>
              <span><a href={`/signup`}>회원가입</a></span>
            </BottomDiv>
          </LoginWrapper>
      </LoginBox>
    </div>
  )
}

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edebeb; //배경색
  height: 100vh;

  p {
    display: flex;
    justify-content: flex-start;
    margin-bottom: auto;
  };
`

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

export const InputBox = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 10px;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 220px;
    background-color: #a7a7d7;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #8c8cc7;
    };
  };
`;

export const BottomDiv = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
align-items: baseline ;

h6 {
  margin: 0px;
  color: #363636;
};

span {
  font-size: 9px;
};

a {
  color: #2226ff;
};
`;                                                                                                                                                                                                                                                                    

