import styled from "styled-components";

export default function Write() {
  return (
    <div>
      <Wrapper id="write">글 쓰기 게시판입니다.</Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
`
