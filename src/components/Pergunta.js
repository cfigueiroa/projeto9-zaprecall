import setaPlay from '../assets/seta_play.png';
import setaVirar from '../assets/seta_virar.png';
import iconeErro from '../assets/icone_erro.png';
// eslint-disable-next-line
import iconeCerto from '../assets/icone_certo.png';
// eslint-disable-next-line
import iconeQuase from '../assets/icone_quase.png';
import styled from 'styled-components';

export default function Pergunta() {
    return (
        <>
            <ContainerPerguntaFechada>
                <p>Pergunta 1</p>
                <img src={setaPlay} alt="setaPlay" />
            </ContainerPerguntaFechada>
            <ContainerPerguntaAberta>
                <p>O que é JSX?</p>
                <img src={setaVirar} alt="setaVirar" />
            </ContainerPerguntaAberta>
            <ContainerPerguntaFechada>
                <p style={{ color: "#FF3030", textDecoration: "line-through", textDecorationThickness: "10%" }}>Pergunta 1</p>
                <img src={iconeErro} alt="iconeErro" />
            </ContainerPerguntaFechada>
            <ContainerPerguntaAberta>
                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                <ContainerBotoes>
                    <button>Não<br />lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </ContainerBotoes>
            </ContainerPerguntaAberta>
        </>
    )
}

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
        font-family: "Recursive";
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
    font-family: "Recursive";
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
        font-family: "Recursive";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        justify-content: center;
        line-height: 14px;
        padding: 5px;
        text-align: center;
        width: 90px;
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
