import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar({ products, carts, tab, setTab, setToken }) {
	return (
		<div className='navbar-container'>
			<Link to={'/home'}>
				<button
					className={
						'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')
					}
				>
					{' '}
					Home
				</button>
			</Link>
			<Link to={'/Calculator'}>
				<button
					className={
						'btn ' +
						(tab === 'Calculator' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('Calculator')}
				>
					{' '}
					Calculator
				</button>
			</Link>
			<Link to={'/Ball'}>
				<button
					className={
						'btn ' + (tab === 'Ball' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('Ball')}
				>
					{' '}
					Animation
				</button>
			</Link>
			<Link to={'/Components'}>
				<button
					className={
						'btn ' +
						(tab === 'Components' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('Components')}
				>
					{' '}
					Components
				</button>
			</Link>
			<Link to={'/Todo'}>
				<button
					className={
						'btn ' + (tab === 'Todo' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('Todo')}
				>
					{' '}
					Todo
				</button>
			</Link>
			<Link to={'/products'}>
				<button
					className={
						'btn ' +
						(tab === 'products' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('products')}
				>
					Product ({products.length})
				</button>
			</Link>

			<Link to={'/Carts'}>
				<button
					className={
						' position-relative btn ' +
						(tab === 'Carts' ? 'btn-primary' : 'btn-outline-primary')
					}
					onClick={() => setTab('Carts')}
				>
					{' '}
					Carts
					{carts.length > 0 && (
						<span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
							{carts.length < 10 ? carts.length : '9+'}
							<span class='visually-hidden'>unread messages</span>
						</span>
					)}
				</button>
			</Link>
			<button
				className='btn btn-outline-danger'
				style={{ marginLeft: '1rem' }}
				onClick={() => setToken('')}
			>
				LOGOUT
			</button>
		</div>
	);
}

export default Navbar;
