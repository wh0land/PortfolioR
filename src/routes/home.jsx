import GlobalStyle from "../components/GlobalStyle";
import {Footer} from "../components/HeaderFooter";
import Profile from "../components/Profile";
import Contents from "../components/Contents";

export default function Home() {
  return (
    <>
        <GlobalStyle />
        <Profile />
        <Contents/>
        <Footer/> 
    </>
  )
}
