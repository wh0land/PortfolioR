import styled from "styled-components";
export default function Posts() {
  return (
    <>
      <Box id="posts"><h3>게시글</h3></Box>
      <PostboxWrapper>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
      </PostboxWrapper>
      <PostboxWrapper>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
        <PostBox>
          <PostEdit>
          <h2>Title</h2>
          <h6>edit</h6>
          </PostEdit>
          <div>
            <h5>by. user0203</h5>
            <h6>더보기</h6>
          </div>
        </PostBox>
      </PostboxWrapper>
    </>
  )
}

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`

const PostboxWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 30px;
margin: 30px 40px 0px;
`

const PostBox = styled.div`
display: flex;
flex-direction: column;
background-color: #FBFBFB;
border-radius: 3px;
border-top: solid #a7a7d7 4px;
padding: 10px;
width: 100%;
box-shadow:0px 0px 5px #D9D9D9;
`

const PostEdit = styled.div`
display: flex;
flex-direction: row;
margin:0px;
gap: 10px;
align-items:flex-end;
`
