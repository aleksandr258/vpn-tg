import './Cart.css';

function Cart({ cart, setActiveSection }) {
	const totalPrice = cart.reduce((total, plan) => total + plan.price, 0);

	const proceedToPayment = () => {
		setActiveSection('payment');
	};

	return (
		<div>
			<h2>Корзина</h2>
			{cart.map((plan, index) => (
				<div key={index}>
					<h3>{plan.name}</h3>
					<p>Цена: {plan.price} USD</p>
				</div>
			))}
			<h3>Общая стоимость: {totalPrice} USD</h3>
			<button onClick={proceedToPayment}>Перейти к оплате</button>
		</div>
	);
}

export default Cart;