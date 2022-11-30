import logo from './assets/img/logo.png';
import setaPlay from './assets/img/seta_play.png';
import setaVirar from './assets/img/seta_virar.png';
import iconeErro from './assets/img/icone_erro.png';
import iconeCerto from './assets/img/icone_certo.png';
import iconeQuase from './assets/img/icone_quase.png';
import party from './assets/img/party.png';
// eslint-disable-next-line
import sad from './assets/img/sad.png';

function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta 1</p>
        <img src={setaPlay} alt="setaPlay" />
      </div>
      <div className="pergunta-aberta">
        <p>O que é JSX?</p>
        <img src={setaVirar} alt="setaVirar" />
      </div>
      <div className="pergunta-fechada">
        <p style={{ color: "#FF3030", textDecoration: "line-through", textDecorationThickness: "10%" }}>Pergunta 1</p>
        <img src={iconeErro} alt="iconeErro" />
      </div>
      <div className="pergunta-aberta">
        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
        <div className="container-botoes fix-btn">
          <button>Não<br />lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </div>
      </div>
      <div className="footer-concluidos">
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
      </div>
    </div>
  );
}

export default App;
