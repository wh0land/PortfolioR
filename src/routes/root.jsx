import { Outlet } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import {Header} from "../components/Header";
import { Footer } from "../components/Footer";

export default function Root() {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        <Header />  
        <Outlet/>  
        <Footer/>
        </>
    );
  }