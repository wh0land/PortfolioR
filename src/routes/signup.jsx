import {useState} from 'react';
import axios from "axios";
import {Cookies} from "react-cookie";
import { LoginBox, LoginWrapper, InputBox, ButtonWrapper, BottomDiv } from './login';

export default function Signup() {

    const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
    };
  const handlePwChange = (e) => {
    setPw(e.target.value);
    };
  
  const apiCall = axios.create({
    baseURL: "https://dummyjson.com",
    });
  
  const clickOk = async () => {
    try{
      const response = await apiCall.post("/auth/login", {
        username: id,
        password: pw,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      sessionStorage.setItem("token", response.data.token);
      setCookie("token", response.data.token);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const cookies = new Cookies();

  const setCookie = (name, value) => {
    return cookies.set(name, value);
  };

  return (
    <div>
      <LoginBox>
          <LoginWrapper>
            <h3>회원가입</h3>
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
              <button onClick={clickOk}>Sign up</button>
            </ButtonWrapper>
            <hr/>
            <BottomDiv>
              <h6>계정이 이미 있으신가요?</h6>
              <span><a href={`/login`}>로그인</a></span>
            </BottomDiv>
          </LoginWrapper>
      </LoginBox>
    </div>
  )
}
