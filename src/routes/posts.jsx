import styled from "styled-components";
export default function Posts() {
  return (
    <>
      <Box id="posts">글 목록 게시판입니다.</Box>
    </>
  )
}

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
`