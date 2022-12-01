import iconeErro from '../assets/icone_erro.png';
import iconeCerto from '../assets/icone_certo.png';
import iconeQuase from '../assets/icone_quase.png';
import party from '../assets/party.png';
// eslint-disable-next-line
import sad from '../assets/sad.png';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterContainer>
            <div style={{ display: "flex", gap: "12px" }}>
                <img src={party} alt="party" />
                <p>Parabéns</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>Você não esqueceu de</p>
                <p>nenhum flashcard!</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>4/4 CONCLUÍDOS</p>
                <div style={{ display: "flex", gap: "5px" }}>
                    <img src={iconeErro} alt="iconeErro" />
                    <img src={iconeQuase} alt="iconeQuase" />
                    <img src={iconeCerto} alt="iconeCerto" />
                </div>
            </div>
        </FooterContainer>
    )
}

export const FooterContainer = styled.div`
    align-items: center;
    background-color: #ffffff;
    bottom: 0;
    color: #333333;
    display: flex;
    flex-direction: column;
    font-family: "Recursive";
    font-size: 18px;
    font-weight: 400;
    /*  */
    gap: 15px;
    /*  */
    justify-content: center;
    min-height: 50px;
    padding: 10px;
    position: fixed;
    width: 100%;
    > .container-botoes {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        width: 80%;
}
`;
