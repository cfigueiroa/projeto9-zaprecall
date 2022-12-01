import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}

export const LogoContainer = styled.div`
    align-items: center;
    display: flex;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        color: #ffffff;
        font-family: "Righteous";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 45px;
        margin-left: 20px;
}
`;
