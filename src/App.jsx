import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar';
import ActivePlans from './components/ActivePlans/ActivePlans';
import Cart from './components/Cart/Cart';


const tg = window.Telegram.WebApp;


function App() {
	const [activeSection, setActiveSection] = useState('choose-plan');
	const [cart, setCart] = useState([]);

	const renderSection = () => {
		switch (activeSection) {
		case 'choose-plan':
			return <CardList setCart={setCart} />;
		case 'my-plans':
			return <ActivePlans />;
		case 'cart':
			return <Cart cart={cart} setActiveSection={setActiveSection} />;
		case 'payment':
			return <Payment />;
		default:
			return <CardList setCart={setCart} />;
		}
	};


	useEffect(() => {
		tg.ready();


	}, []);

	const onCLose = () => {
		tg.close();
	}; 

	return (
		<>
		  <NavBar setActiveSection={setActiveSection}></NavBar>
			<h2 className="section-tittle">Доступные тарифы</h2>
			<div className="section-container">
				{renderSection()}
			</div>
		
		</>
	);
}

export default App;
