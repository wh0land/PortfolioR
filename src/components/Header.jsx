import styled from 'styled-components';

export function Header() {
  return (
    <div>
        <ProfileTitle>
          <MainTitle>
            <h3><a href="/">leejin portfolio</a></h3>
            <NavVar>
              <Menu href={`/`}><li>Main</li></Menu>
              <Menu href={`/posts`}><li>Posts</li></Menu>
              <Menu href={`/write`}><li>Write</li></Menu>
              <Menu href={`/pd`}><li>pd!!</li></Menu>
            </NavVar>
          </MainTitle>
          <NavVar>
            <ButtonWrapper>
              <button>
              <a href={`/login`}><li>Login</li></a>
              </button>
              <button>
              <a href={`/signup`}><li>Sign up</li></a>
              </button>
            </ButtonWrapper>
          </NavVar>
        </ProfileTitle>
    </div>
  )
}

const ProfileTitle = styled.div`
display: flex;
justify-content: space-between;
padding-left: 30px;
padding-right: 30px;
align-items: center;
height: 80px;
background: ${(props) => props.background || "linear-gradient(90deg, #b1e2ec, #a7a7d7)"};
color:aliceblue;
`
const MainTitle = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
gap: 50px;
a {
  text-decoration-line: none;
  text-decoration: none;
  color:#FFFFFF;
};
`

export const NavVar = styled.ul`
display: flex;
justify-content: center;
flex-direction: row;
gap: 10px;
list-style: none;
`

const Menu = styled.a`
  text-decoration-line: none;
  text-decoration: none;
  color:#FFFFFF;
  font-weight: 500;

  &:hover{
    background-color:#8c8cc7;
  };
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #363636;
  };

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #8c8cc7;
      a {color: white;}
    }
  };
`;


export const FooterL= styled.div`
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(204, 204, 204);
font-size: 12px;
margin-top: 80px;
`

