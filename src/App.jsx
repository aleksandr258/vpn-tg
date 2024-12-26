import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar';

const tg = window.Telegram.WebApp;


function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		tg.ready();


	}, []);

	const onCLose = () => {
		tg.close();
	}; 

	return (
		<>
		  <NavBar></NavBar>
			<CardList></CardList>
		
		</>
	);
}

export default App;
