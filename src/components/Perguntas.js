import Pergunta from './Pergunta';
import cards from '../cards';

export default function Perguntas() {
    return (cards.map((card, index) => <Pergunta key={card.question} question={card.question} answer={card.answer} index={index}/>))
}