import { useState } from "react"
import styled from "styled-components"
import seta_play from "../Assets/img/seta_play.png"
import seta_virar from "../Assets/img/seta_virar.png"

export default function FlashCard(props) {
    const [clicked, setClicked] = useState([])
    const newClicked = [...clicked, props.i]
    console.log(clicked)

    function flipCard() {

        setClicked(newClicked)
        console.log(props.q.question)
        console.log(newClicked)
        console.log(clicked)
    }

    function flipBack() {
        setClicked([])
    }

    return (

        <>
            <QuestionClosed
                display={!clicked.includes(props.i)}
                onClick={() => flipCard()}
            >
                <p>Pergunta {props.i + 1}</p>
                <img src={seta_play} />
            </QuestionClosed>
            <QuestionOpened
                display={clicked.includes(props.i)}
                onClick={() => flipBack()}
            >
                <p>{props.q.question}</p>
                <img src={seta_virar} />
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
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
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
`