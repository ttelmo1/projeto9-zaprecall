import { useState } from "react"
import styled from "styled-components"
import seta_play from "../Assets/img/seta_play.png"
import icone_certo from "../Assets/img/icone_certo.png"
import icone_erro from "../Assets/img/icone_erro.png"
import icone_quase from "../Assets/img/icone_quase.png"
import seta_virar from "../Assets/img/seta_virar.png"

export default function FlashCard(props) {
    const [clicked, setClicked] = useState([])
    const newClicked = [...clicked, props.i]
    const [showAnswer, setShowAnswer] = useState(false) 
    const [hideQuestion, setHideQuestion] = useState(true)
    const [arr, setArr] = useState([])
    const [color, setColor] = useState('black')
    const [icon, setIcon] = useState(seta_play)
    

    function flipCard() {
        setClicked(newClicked)
    }

    function flipAnswer(){
        setShowAnswer(true)
        setHideQuestion(false)
    }

    function addConcludedNeg(){
        props.setConcluded(props.concluded + 1)
        setArr([...arr, props.i])
        setColor('#FF3030')
        setIcon(icone_erro)
        setClicked([])
    }

    function addConcludedHalf(){
        props.setConcluded(props.concluded + 1)
        setArr([...arr, props.i])
        setColor('#FF922E')
        setIcon(icone_quase)
        setClicked([])
    }

    function addConcludedYes(){
        props.setConcluded(props.concluded + 1)
        setArr([...arr, props.i])
        setColor('#2FBE34')
        setIcon(icone_certo)
        setClicked([])
    }

    return (

        <>
            <QuestionClosed
                display={!clicked.includes(props.i)}
                
                finished={arr.includes(props.i)}
                color={color}
                
            >
                <p>Pergunta {props.i + 1}</p>
                <button disabled={arr.includes(props.i)} onClick={() => flipCard()}>
                    <img src={icon}/>
                </button>
            </QuestionClosed>
            <QuestionOpened
                display={clicked.includes(props.i)}
            >
                {hideQuestion &&(
                <p>{props.q.question}</p>
                )}

                {hideQuestion && (
                <img onClick={() => flipAnswer()} src={seta_virar} />
                )}

                {showAnswer &&(
                <p>{props.q.answer}</p>
                )}

                {showAnswer &&(
                <>  
                    <div>
                        <button onClick={()=> addConcludedNeg()}>Não lembrei</button>
                        <button onClick={()=> addConcludedHalf()}>Quase não lembrei</button>
                        <button onClick={()=> addConcludedYes()}>Zap!</button>
                    </div>
                </>
                )}
            </QuestionOpened>
        </>
    )
}

const QuestionClosed = styled.li`
    display:${props => props.display === true ? 'flex' : 'none'};
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;

    > p {
    cursor: default;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    text-decoration:${props => props.finished === true ? 'line-through' : 'none'};
    }

    > button {
        border: none;
        background-color: #FFFFFF;
    }
`
const QuestionOpened = styled.li`
    display:${props => props.display === true ? 'flex' : 'none'};
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    flex-direction: column;
    justify-content: space-between;

    > img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    }

    > div {
        display: flex;
        justify-content: space-around;
    }

    > div button {
    width: 85px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: none;
    padding:5px;
    }
    
    button:nth-child(1){
        background: #FF3030;
    }
    button:nth-child(2){
        background: #FF922E;;
    }
    button:nth-child(3){
        background:  #2FBE34;
    }
`