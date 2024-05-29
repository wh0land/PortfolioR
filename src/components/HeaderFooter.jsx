import styled from 'styled-components';

export function Header() {
  return (
    <div>
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
    </div>
  )
}

export function Footer() {
  return (
    <>
      <FooterL>
      <NavVar>
        <a href="mailto:leejinj0730@hufs.ac.kr"><li>Email</li></a>
        <a href="https://github.com/wh0land"><li>Github</li></a>
        <a href="https://www.instagram.com/leejinch0_o?igsh=MWw3czV6NmJuNXJnYg%3D%3D&utm_source=qr"><li>Instagram</li></a>
      </NavVar>
        <span>Likelion 12th Assignment</span>
        <span>ⓒ 2024. 조이진 All rights reserved.</span>
      </FooterL>
    </>
  );
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

const NavVar = styled.ul`
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
    background-color:#b1e2ec;
    color:black;
  };
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

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
    }
  };
`;


const FooterL= styled.div`
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(204, 204, 204);
font-size: 12px;
margin-top: 80px;
`

