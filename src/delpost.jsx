import styled from "styled-components";

export default function Delpost({onConfirm, onCancel}) {
  return (
  <BoxWrapper>
    <h3>정말 삭제하시겠습니까?</h3>
    <ButtonWrapper>
      <button onClick={onConfirm}>예</button>
      <button onClick={onCancel}>아니오</button>
    </ButtonWrapper>
  </BoxWrapper>
  )
}

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  height: 150px;
  box-shadow: 0px 0px 5px #d9d9d9;
  box-sizing: border-box;
`;

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

    span {
      font-size: 10px;
    }

    &:hover {
      background-color: #8c8cc7;
    }
  }
`;