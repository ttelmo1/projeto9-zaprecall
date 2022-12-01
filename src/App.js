import { useState } from "react";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
// import questions from "./questions"
import logo from "./Assets/img/logo.png"
import Cards from "./Components/Cards"
import Concluded from "./Components/Concluded"


export default function App() {
  const [concluded ,setConcluded] = useState(0)

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <LogoContainer>
          <img src={logo}/>
          <h1>ZapRecall</h1>
        </LogoContainer>
        <Cards setConcluded={setConcluded} />
        <Concluded concluded={concluded} />
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  //padding-bottom: 200px; //Estava aumentando o tamnho da tela verticalmente de maneira desnecessária(aparentemente)
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  > img {
    width: 52px;
  }
  
  > h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
`


