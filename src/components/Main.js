import Footer from './Footer';
import Logo from './Logo';
import Perguntas from './Perguntas';
import styled from 'styled-components';
import { useState } from 'react';

export default function Main() {
    const [finalizadas, setFinalizadas] = useState([]);
    return (
        <MainContainer>
            <Logo />
            <Perguntas finalizadas={finalizadas} setFinalizadas={setFinalizadas}/>
            <Footer finalizadas={finalizadas}/>
        </MainContainer>
    )
}

export const MainContainer = styled.div`
    align-items: center;
    background-color: #fb6b6b;
    display: flex;
    flex-direction: column;
    margin: 0px;
    min-height: 100vh;
    padding-bottom: 200px;
    padding: 0px;
    width: 100vw;
`;
