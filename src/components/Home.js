import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Home({setShow}) {
    return (
        <HomeContainer>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={()=> setShow(true)}>Iniciar Recall!</button>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    align-items: center;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    gap: 6%;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow-y: hidden;
    position: fixed;
    top: 0;
    transition: 0.5s;
    width: 100%;
    z-index: 1;
    img{
        height: 161px;
        width: 136px;
    }
    h1{
        align-items: center;
        color: #FFFFFF;
        display: flex;
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 45px;
        text-align: center;
    }
    button{
        background-color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #D70900;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        height: 54px;
        width: 246px;
        &:hover:enabled{
        filter: brightness(110%) saturate(110%);
        cursor: pointer;
     }
    }
`