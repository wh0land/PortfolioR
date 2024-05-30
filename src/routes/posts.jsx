import styled from "styled-components";

export default function Posts() {
  return (
    <>
      <PageTitle><h3>게시글</h3></PageTitle>
      <PostboxWrapper>
        <PostBox>
          <PostMeta>
            <h6>Post Id</h6>
            <h6>by. user0203</h6>
          </PostMeta>
          <hr/>
          <h2>제목:</h2>
          <h5>게시글 내용 미리보기입니다..</h5>
          <ButtonWrapper>
          <button><span>상세보기</span></button>
          </ButtonWrapper>
        </PostBox>
      </PostboxWrapper>
    </>
  )
}

export const PageTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`

export const PostboxWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 30px;
margin: 30px 40px 0px;
`

export const PostBox = styled.div`
display: flex;
flex-direction: column;
background-color: #FBFBFB;
border-radius: 15px;
padding: 20px;
width: 100%;
box-shadow:0px 0px 5px #D9D9D9;
gap:5px;

hr {
  width:100%;
  background-color:#a7a7d7;
  border: none;
  height: 1.5px;
  margin: 0px;
};

h2 {
  margin: 10px 0px 0px 0px;
};

h6 {
  margin: 0px;
  color: #767676;
};
`

export const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #a7a7d7;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    span {
      font-size: 10px;
    }

    &:hover {
      background-color: #8c8cc7;
    }
  }
`;
