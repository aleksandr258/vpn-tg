import './ActivePlans.css';


function ActivePlans(){
	const plans = [
		{ id: 1, name: 'Plan 1', status: 'Активен' },
		{ id: 2, name: 'Plan 2', status: 'Истек' }
	];

	return (
		<div>
			<h2>Мои планы</h2>
			{plans.map((plan) => (
				<div key={plan.id}>
					<h3>{plan.name}</h3>
					<p>Статус: {plan.status}</p>
				</div>
			))}
		</div>
	);
}


export default ActivePlans;