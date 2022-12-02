import cards from '../cards';
import Pergunta from './Pergunta';

export default function Perguntas({ finalizadas, setFinalizadas }) {
    return (cards.map((card, index) =>
        <Pergunta
            key={card.question}
            question={card.question}
            answer={card.answer}
            index={index}
            finalizadas={finalizadas}
            setFinalizadas={setFinalizadas}
        />));
}