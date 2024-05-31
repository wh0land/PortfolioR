import { NavVar } from './Header';
import styled from 'styled-components';

export function Footer() {
  return (
    <>
    <FooterBox>
        <NavVar>
          <a href="mailto:leejinj0730@hufs.ac.kr"><li>Email</li></a>
          <a href="https://github.com/wh0land"><li>Github</li></a>
          <a href="https://www.instagram.com/leejinch0_o?igsh=MWw3czV6NmJuNXJnYg%3D%3D&utm_source=qr"><li>Instagram</li></a>
        </NavVar>
        <span>Likelion 12th Assignment</span>
        <span>ⓒ 2024. 조이진 All rights reserved.</span>
      </FooterBox>
    </>
  );
}

const FooterBox= styled.div`
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(204, 204, 204);
font-size: 12px;
`
