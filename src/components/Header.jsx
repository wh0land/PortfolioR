import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';


export function Header() {
  
  let user = sessionStorage.getItem("nickname");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect (() => {
    if(sessionStorage.getItem('access') === null){
      console.log('isLogin ?? ::', isLogin);
    } else {
      setIsLogin(true);
      console.log('isLogin ?? ::', isLogin);
    }
  })

  const onLogout = () => {
    sessionStorage.removeItem('access')
    sessionStorage.removeItem('nickname')
    setIsLogin(false);
    navigate('/');
  }

  if (isLogin) {
    return (
      <>
        <ProfileTitle>
        <MainTitle>
          <h3><a href="/">leejin portfolio</a></h3>
          <NavVar>
            <Menu href={`/`}><li>Main</li></Menu>
            <Menu href={`/posts`}><li>Posts</li></Menu>
            <Menu href={`/write`}><li>Write</li></Menu>
            <Menu href={`/delpost`}><li>삭제확인</li></Menu>
          </NavVar>
        </MainTitle>
        <NavVar>
          <ButtonWrapper>
            <span>hello, {user}</span>
            <button onClick={onLogout}>
              <li>Logout</li>
            </button>
          </ButtonWrapper>
        </NavVar>
      </ProfileTitle>
    </>
    );
  } else {
    return(
      <>
          <ProfileTitle>
            <MainTitle>
              <h3><a href="/">leejin portfolio</a></h3>
              <NavVar>
                <Menu href={`/`}><li>Main</li></Menu>
                <Menu href={`/posts`}><li>Posts</li></Menu>
                <Menu href={`/write`}><li>Write</li></Menu>
              </NavVar>
            </MainTitle>
            <NavVar>
              <ButtonWrapper>
                <button>
                <a href={`/login`}><li>Login</li></a>
                </button>
                <button>
                <a href={`/signup`}><li>Sign up</li></a>
                </button>
              </ButtonWrapper>
            </NavVar>
          </ProfileTitle>
      </>
    );
  }
}

const ProfileTitle = styled.div`
display: flex;
justify-content: space-between;
padding-left: 30px;
padding-right: 30px;
align-items: center;
height: 80px;
background: ${(props) => props.background || "linear-gradient(90deg, #b1e2ec, #a7a7d7)"};
color:aliceblue;
`
const MainTitle = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
gap: 50px;
a {
  text-decoration-line: none;
  text-decoration: none;
  color:#FFFFFF;
};
`

export const NavVar = styled.ul`
display: flex;
justify-content: center;
flex-direction: row;
gap: 10px;
list-style: none;
`

const Menu = styled.a`
  text-decoration-line: none;
  text-decoration: none;
  color:#FFFFFF;
  font-weight: 500;

  &:hover{
    background-color:#8c8cc7;
  };
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #363636;
  };

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #8c8cc7;
      a {color: white;}
    }
  };
`;

