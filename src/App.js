import { useState } from "react";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import logo from "./Assets/img/logo.png"
import Cards from "./Components/Cards"
import Concluded from "./Components/Concluded"



export default function App() {
  const [concluded ,setConcluded] = useState(0)
  const [initialScreen, setInitialScreen] = useState(true)
  const [cardsScreen, setCardsScreen] = useState(false)
  const [content, setContent] = useState('center')

  function startRecall(){
    setInitialScreen(false)
    setCardsScreen(true)
    setContent('')
  }

  return (
    <>
      <GlobalStyle />
      <ScreenContainer content={content}>
       {cardsScreen && 
       <LogoContainer>
          <img src={logo}/>
          <h1>ZapRecall</h1>
        </LogoContainer>}
        {initialScreen && 
          <Welcome>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={()=> startRecall()}>Iniciar Recall!</button>
          </Welcome>
        }
        {cardsScreen && <Cards setConcluded={setConcluded} concluded={concluded} />}
        {cardsScreen && <Concluded concluded={concluded} />}
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
  justify-content: ${props => props.content}
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
  cursor: default
}
`
const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  > img{
    width: 136px;
    height: 161px;
  }

  > h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  color: #FFFFFF
  }

  > button {
    width: 246px;
    height: 54px;
    border: none;
    color: #D70900;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
`
