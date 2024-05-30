import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
import { LoginBox, LoginWrapper, InputBox, ButtonWrapper, BottomDiv } from './login';
import styled from "styled-components";

export default function Signup() {
  
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [nname, setNname] = useState('');
  const [univ, setUniv] = useState('');
  const [loc, setLoc] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePw1Change = (e) => {
    setPw1(e.target.value);
  };
  const handlePw2Change = (e) => {
    setPw2(e.target.value);
  };
  const handleNnameChange = (e) => {
    setNname(e.target.value);
  };
  const handleUnivChange = (e) => {
    setUniv(e.target.value);
  };
  const handleLocChange = (e) => {
    setLoc(e.target.value);      
  };
  
  const signupOk = async () => {

    try{
      const response = await api.post("/dj/registration/", {
        username: id,
        password1: pw1,
        password2: pw2,
        nickname: nname,
        university: univ,
        location: loc,
      });
      console.log(response.data);
      localStorage.setItem("access", response.data.access);

      //로그인 성공시
      navigate('/login');
      return response.data, response.data.access;
      
    } catch (error) {
      return error;
    }
  };

  console.log(localStorage.getItem("access"));

  return (
    <div>
      <LoginBox>
          <LoginWrapper>
            <h3>회원가입</h3>
            <InputBox
              placeholder="아이디"
              value={id}
              onChange={handleIdChange}
            />
            <PasswordDiv>
              <InputPassword
                placeholder="비밀번호"
                value={pw1}
                onChange={handlePw1Change}
              />
              <InputPassword
                placeholder="비밀번호 확인"
                value={pw2}
                onChange={handlePw2Change}
              />
            </PasswordDiv>
            <InputBox
              placeholder="닉네임"
              value={nname}
              onChange={handleNnameChange}
            /> 
            <InputBox
              placeholder="대학교"
              value={univ}
              onChange={handleUnivChange}
            />
            <InputBox
              placeholder="소속대학교 지역"
              value={loc}
              onChange={handleLocChange}
            /> 
            <ButtonWrapper>
              <button onClick={signupOk}>Sign up</button>
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

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:10px;
`

const InputPassword = styled.input`
  width: 85px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 10px;
  outline: none;
`
