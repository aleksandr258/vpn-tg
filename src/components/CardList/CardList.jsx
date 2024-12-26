
import './CardList.css';


function CardList({ setCart }){
	const plans = [
		{ id: 1, name: 'Baza', text: '', price: 1 },
		{ id: 2, name: 'Baza +', text: '', price: 2 },
		{ id: 3, name: 'Supreme', text: '', price: 3 }
	];

	const addToCart = (plan) => {
		setCart((prevCart) => [...prevCart, plan]);
	};

	return (
		<div className="cardList-wrap">
			{plans.map(plan =>(
				<div key={plan.id} className="card-wrapp">
					<div className="card">
						<h2 className="plan-tittle">{plan.name}</h2>
					   <h2 className="plan-tittle">{`Цена: $${plan.price} usd`}</h2>
						<p className="plan-text">самый лучший план</p>
						<button className="add-plan" onClick={() => addToCart(plan)}>Добавить в корзину</button>
					</div>
				</div>
			))}
		</div>
		
	);
}

export default CardList;