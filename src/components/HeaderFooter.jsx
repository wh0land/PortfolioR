import styled from 'styled-components';

export function Header() {
  return (
    <div>
        <ProfileTitle>
            <h3><MainTitle href="/">leejin portfolio</MainTitle></h3>
            <NavVar>
              <Menu href={`/`}><li>Main</li></Menu>
              <Menu href={`../routes/posts.jsx`}><li>Posts</li></Menu>
              <Menu href={`../routes/write.jsx`}><li>Write</li></Menu>
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
justify-content: space-around;
align-items: center;
height: 80px;
background: ${(props) => props.background || "linear-gradient(90deg, #b1e2ec, #a7a7d7)"};
color:aliceblue;
`
const MainTitle = styled.a`
text-decoration-line: none;
text-decoration: none;
color:#FFFFFF;
font-weight: 600;
`

const NavVar = styled.ul`
display: flex;
justify-content: center;
flex-direction: row;
margin-right: 30px;
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
  }
`

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

