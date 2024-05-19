import profilePhoto from '../images/profilePhoto.jpg'
import styled from 'styled-components';
import ContentsTitle from './ContentsTitle';

export default function Profile() {
    return (
      <>
        <AboutMe>
          <ProfileImg src={profilePhoto}/>
          <div>
           <ContentsTitle title="About Me"/>
            <UlWrapper>
              <a href="mailto:leejinj0730@hufs.ac.kr"><li>Email</li></a>
              <a href="https://github.com/wh0land"><li>Github</li></a>
              <a href="https://www.instagram.com/leejinch0_o?igsh=MWw3czV6NmJuNXJnYg%3D%3D&utm_source=qr"><li>Instagram</li></a>
            </UlWrapper>
           <p>한국외국어대학교 3학년에 재학 중인 조이진입니다. <br /> 탐구심을 갖고 여러 분야를 알아가는 것이 가장 즐겁습니다. <br />최근 관심사는 프론트엔드 개발과 UXUI디자인 분야입니다.</p>
            <UlWrapper>
              <li>⚒️Technology</li>
              <li>🎨UXUI</li>
              <li>🎧Rock music</li>
              <li>📚Reading</li>
              <li>🌐Language</li>
            </UlWrapper>
          </div>
        </AboutMe>
      </>
    );
  }

const AboutMe = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 100px;
height: 300px;
`

const UlWrapper = styled.ul`
margin-top: 20px;
display: flex;
flex-direction: row;
gap: 10px;
list-style: none;
margin: 0px;
padding: 0px;
`

const ProfileImg = styled.img`
display: flex;
align-items: center;
border-radius: 100px;
height: 200px;
`