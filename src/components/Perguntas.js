import Pergunta from './Pergunta';
import cards from '../cards';

export default function Perguntas({ finalizadas, setFinalizadas }) {
    return (cards.map((card, index) => <Pergunta key={card.question} question={card.question} answer={card.answer} index={index} finalizadas={finalizadas} setFinalizadas={setFinalizadas}/>))
}