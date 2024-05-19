import { Outlet } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import {Header} from "../components/HeaderFooter";
export default function Root() {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        <Header />  
        <Outlet/>  
        </>
    );
  }