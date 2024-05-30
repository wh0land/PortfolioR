import styled from "styled-components";
import {PostHeader, PostContent} from "./write";
import { PostBox, PostboxWrapper, ButtonWrapper } from "./posts";

export default function PostDetail() {
  return (
    <>
      <PostboxWrapper>
      <PostBox>    
        <PostId>
        <h5>postid</h5>
        </PostId>    
        <PostHeader>
          <h2>제목: 클레오파트라</h2>
        </PostHeader>
        <PostHeader>
        <WriterId>
        <h5>by. user0203</h5>
        </WriterId>
        <ButtonWrapper>
            <button>edit</button>
            <button>delete</button>
          </ButtonWrapper>
        </PostHeader>
        <hr/>
        <PostContent>
          <p>안녕 클레오파트라 세상에서 제일 가는 포테이토칩</p>
        </PostContent>
      </PostBox>
      </PostboxWrapper>
    </>
  );
}

const WriterId = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0px 5px 0px;

  h5 {
    color: gray;
    font-size: 10px;
    margin:0px;
  };
`;

const PostId = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;

  h5 {
    color: gray;
    font-size: 10px;
    margin:0px;
  };
`