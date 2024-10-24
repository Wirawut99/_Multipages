import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pagess/Home/Home';
import Calculator from './pagess/Calculator/Calculator';
import Todo from './pagess/Todo/Todo';
import Components from './pagess/Components/Components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './App.css';
import Layout from './layouts/Layout/Layout';
import Login from './Login/Login';
import Products from './products/products';
import Ball from './pagess/Ball/Ball';
import Carts from './pagess/Carts/Carts';
import { fetchProducts } from './data/products';
const intTab = 'Todo';

function App() {
	const [role, setRole] = useState('');
	const [token, setToken] = useState('');
	const [products, setProducts] = useState([]);
	const [carts, setCarts] = useState([]);
	useEffect(() => setProducts(fetchProducts()), []);
	useEffect(() => console.log(products), [products]);

	const [tab, setTab] = useState('');
	useEffect(() => {
		setTab(intTab);
	}, []); //frist load

	if (token === '') {
		return <Login setToken={setToken} setRole={setRole} />;
	} else {
		return (
			<div className='App-container'>
				<HashRouter>
					<Routes>
						<Route
							element={
								<Layout products={products} carts={carts} setToken={setToken} />
							}
						>
							<Route path={'/'} element={<Home />} />
							<Route path={'/home'} element={<Home />} />
							<Route path={'/calculator'} element={<Calculator />} />{' '}
							<Route path={'/components'} element={<Components />} />
							<Route path={'/todo'} element={<Todo />} />
							<Route
								path={'/products'}
								element={
									<Products
										products={products}
										carts={carts}
										setCarts={setCarts}
									/>
								}
							/>
							<Route path={'/ball'} element={<Ball />} />
							<Route
								path={'/carts'}
								element={<Carts carts={carts} setCarts={setCarts} />}
							/>
						</Route>
					</Routes>
				</HashRouter>
			</div>
		);
	}
}

export default App;
