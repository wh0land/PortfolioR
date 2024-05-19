import styled from 'styled-components';
import React from 'react'
import ContentsTitle from './ContentsTitle';
import qrius from '../images/qrius.png'
import likelion from '../images/likelion.png'

export default function Contents() {
  return (
    <>
    <Warpper>
    <ContentsTitle title="Education"/>
    <TxtContents>
        <h3>한국외국어대학교</h3>
        <span>2022.03-재학중</span>
        <span>차이나데이터큐레이션 전공, AI융합 전공</span>
    </TxtContents>
    <ContentsTitle title="Values"/>
        <TxtList>
            <li>일의 결과도 중요하지만, 계획대로 되지 않을 때 돌파구를 찾아내는 과정을 더 의미있게 생각해요.</li>
            <li>다양한 입장을 고려하여 소외되는 사람이 없는 세상을 꿈꿔요.</li>
            <li>"三人行, 必有我師焉"(세 사람이 함께 길을 가면 거기에 반드시 내 스승이 있다)는 말처럼, 누구에게나 배울 것이 있다고 생각해요.</li>
        </TxtList>
    <ContentsTitle title="Strenghts"/>
        <TxtList>
            <li>맡은 일을 책임감 있게 완수해요.</li>
            <li>다른 사람들의 피드백을 잘 받아들여요.</li>
            <li>항상 배울 준비가 되어 있어요.</li>
        </TxtList>
    <ContentsTitle title="Activities"/>
        <ActivityWrapper>
        <ActivityImage src={qrius} alt="Qrius"/>
        <TxtContents>
            <h3>학과동아리 Qrius</h3>
            <span>2022.06-2023.06</span>
            <span>중국언어문화학부 내에 차이나데이터큐레이션 전공이 신설되면서 생긴 데이터 동아리예요. <br />Notion, Tableau 같은 데이터시각화 툴을 익혔어요.</span>
        </TxtContents>
        </ActivityWrapper>
        <ActivityWrapper>
        <ActivityImage src={likelion} alt="Likelion"/>
        <TxtContents>
            <h3>연합동아리 멋쟁이사자처럼 대학</h3>
            <span>2024.03-</span>
            <span>현재 활동 중이예요. <br /> 프론트엔드 파트로 참여하며 웹 개발에 대해 배우고 있어요.</span>
        </TxtContents>
        </ActivityWrapper>
    </Warpper>
    </>
  )
}
const Warpper= styled.div`
display: flex;
flex-direction: column;
gap:30px;
margin-left: 30px;`


const TxtList= styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
margrin: 0px;
list-style: disc;
`

const TxtContents= styled.div`
display: flex;
flex-direction: column;
`

const ActivityImage = styled.img`
height: 200px;
`

const ActivityWrapper= styled.div`
display: flex;
flex-direction: row;
gap: 50px;
margin-bottom: 20px;
`

