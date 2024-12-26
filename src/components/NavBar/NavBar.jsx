import './NavBar.css';

function NavBar({ setActiveSection }) {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a href="#choose-plan" onClick={() => setActiveSection('choose-plan')}>
					Выбор планов
					</a>
				</li>
				<li>
					<a href="#my-plans" onClick={() => setActiveSection('my-plans')}>
					Мои планы
					</a>
				</li>
				<li>
					<a href="#cart" onClick={() => setActiveSection('cart')}>
					Корзина
					</a>
				</li>
			</ul>
		</nav>
	);
}
export default NavBar;