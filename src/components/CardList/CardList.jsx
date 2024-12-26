import CardPlan from '../CardPlan/CardPlan';
import './CardList.css';


function CardList(){
	return (
		<div className="cardList-wrap">
			<CardPlan></CardPlan>
			<CardPlan></CardPlan>
			<CardPlan></CardPlan>
		</div>
		
	);
}

export default CardList;