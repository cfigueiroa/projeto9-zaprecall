import cards from '../cards';
import iconeCerto from '../assets/icone_certo.png';
import iconeErro from '../assets/icone_erro.png';
import iconeQuase from '../assets/icone_quase.png';
import party from '../assets/party.png';
import sad from '../assets/sad.png';
import styled from 'styled-components';

export default function Footer({ finalizadas }) {

    function textoFinal() {
        if (finalizadas.includes(false)) {
            return (
                <>
                    <div style={{ display: "flex", gap: "12px" }}>
                        <img src={sad} alt="sad" />
                        <p>Putz...</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                    </div>
                </>
            );
        }
        return (
            <>
                <div style={{ display: "flex", gap: "12px" }}>
                    <img src={party} alt="party" />
                    <p>Parabéns</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p>Você não esqueceu de</p>
                    <p>nenhum flashcard!</p>
                </div>
            </>
        );
    }

    const qntdPerguntas = cards.length;
    return (
        <FooterContainer data-test="footer">
            {
                (finalizadas.length === qntdPerguntas) &&
                <ContainerFinished data-test="finish-text">
                    {textoFinal()}
                </ContainerFinished>
            }
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <p>{finalizadas.length}/{qntdPerguntas} CONCLUÍDOS</p>
                <div style={{ display: "flex", gap: "5px" }}>
                    {finalizadas.map((item, index) => {
                        if (item === true) {
                            return (
                                <img data-test="zap-icon" key={index} src={iconeCerto} alt="iconeCerto" />
                            );
                        }
                        if (item === false) {
                            return (
                                <img data-test="no-icon" key={index} src={iconeErro} alt="iconeErro" />
                            );
                        }
                        return (
                            <img data-test="partial-icon" key={index} src={iconeQuase} alt="iconeQuase" />
                        );
                    })}
                </div>
            </div>
        </FooterContainer>
    );
}

export const FooterContainer = styled.div`
    align-items: center;
    background-color: #ffffff;
    bottom: 0;
    color: #333333;
    display: flex;
    flex-direction: column;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    /*  */
    gap: 15px;
    /*  */
    justify-content: center;
    min-height: 50px;
    padding: 10px;
    position: sticky;
    width: 100%;
    > .container-botoes {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        width: 80%;
}
`;

export const ContainerFinished = styled.div`
    align-items: center;
    background-color: #ffffff;
    bottom: 0;
    color: #333333;
    display: flex;
    flex-direction: column;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    /*  */
    gap: 15px;
    /*  */
    justify-content: center;
    min-height: 50px;
    padding: 10px;
    position: sticky;
    width: 100%;
`;
