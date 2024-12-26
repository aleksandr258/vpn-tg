import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import NavBar from './components/NavBar/NavBar';

const tg = window.Telegam.WebApp;


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
			<button onClick={onCLose}></button>

		</>
	);
}

export default App;
