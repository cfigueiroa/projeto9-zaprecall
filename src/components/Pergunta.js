import { useState } from 'react';
import iconeCerto from '../assets/icone_certo.png';
import iconeErro from '../assets/icone_erro.png';
import iconeQuase from '../assets/icone_quase.png';
import setaPlay from '../assets/seta_play.png';
import setaVirar from '../assets/seta_virar.png';
import styled from 'styled-components';

export default function Pergunta({ question, answer, index, finalizadas, setFinalizadas }) {
    const [cardEstado, setCardEstado] = useState(0);
    const [resposta, setResposta] = useState(undefined);
    // i love lint
    const dois = 2;
    const tres = 3;

    function virarCarta() {
        setCardEstado(cardEstado + 1);
    }

    function pegarResposta(bool) {
        setResposta(bool);
        setFinalizadas([...finalizadas, bool]);
        virarCarta();
    }

    function pegarIcone() {
        if (resposta === undefined) {
            return [iconeQuase, "#ff922e", "partial-icon"];
        }
        if (resposta === true) {
            return [iconeCerto, "#2fbe34", "zap-icon"];
        }
        return [iconeErro, "#ff3030", "no-icon"];
    }

    return (
        <>
            {cardEstado === 0 && <ContainerPerguntaFechada data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {index + 1}</p>
                <ClickableImg data-test="play-btn" src={setaPlay} alt="setaPlay" onClick={virarCarta} />
            </ContainerPerguntaFechada>}
            {cardEstado === 1 && <ContainerPerguntaAberta data-test="flashcard">
                <p data-test="flashcard-text">{question}</p>
                <ClickableImg data-test="turn-btn" src={setaVirar} alt="setaVirar" onClick={virarCarta} />
            </ContainerPerguntaAberta>}
            {cardEstado === dois && <ContainerPerguntaAberta data-test="flashcard">
                <p data-test="flashcard-text">{answer}</p>
                <ContainerBotoes>
                    <button data-test="no-btn" onClick={() => pegarResposta(false)}>Não<br />lembrei</button>
                    <button data-test="partial-btn" onClick={() => pegarResposta()}>Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={() => pegarResposta(true)}>Zap!</button>
                </ContainerBotoes>
            </ContainerPerguntaAberta>}
            {cardEstado === tres && <ContainerPerguntaFechada data-test="flashcard">
                <p data-test="flashcard-text" style={{ color: pegarIcone()[1], textDecoration: "line-through", textDecorationThickness: "10%" }}>Pergunta {index + 1}</p>
                <img data-test={pegarIcone()[dois]} src={pegarIcone()[0]} alt="icone" />
            </ContainerPerguntaFechada>}
        </>
    );
}

export const ClickableImg = styled.img`
    &:hover{
    cursor: pointer;
    filter: brightness(200%) saturate(200%);
    }
`;

export const ContainerPerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;

export const ContainerPerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;

export const ContainerBotoes = styled.div`
    /*  */
    display: flex;
    gap: 8px;
    /*  */
    > button{
        align-items: center;
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        /*  */
        border-color: inherit;
        /*  */
        color: #ffffff;
        display: flex;
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        justify-content: center;
        line-height: 14px;
        padding: 5px;
        text-align: center;
        width: 90px;
        &:hover{
        filter: brightness(110%) saturate(110%);
        cursor: pointer;
     }
    }
    /*  */
    > button:nth-child(1) {
        background-color: #ff3030;
    }
    > button:nth-child(2) {
        background-color: #ff922e;
    }
    > button:nth-child(3) {
        background-color: #2fbe34;
    }
    /*  */
`;
