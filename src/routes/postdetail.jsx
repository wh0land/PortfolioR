import styled from "styled-components";
import {DetailBox, PostHeader, PostContent} from "./write";

export default function PostDetail() {
  return (
    <>
      <DetailBox>
        <PostHeader>
          <h2>클레오파트라</h2>
          <ButtonWrapper>
            <button>edit</button>
            <button>delete</button>
          </ButtonWrapper>
        </PostHeader>
        <PostMeta>
          <h5>by. user0203</h5>
        </PostMeta>
        <PostContent>
          <p>안녕 클레오파트라 세상에서 제일 가는 포테이토칩</p>
        </PostContent>
      </DetailBox>
    </>
  );
}

const ButtonWrapper = styled.div`
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

    &:hover {
      background-color: #8c8cc7;
    }
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: #757575;
`;
