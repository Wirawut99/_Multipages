import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../../products/products';

import './Carts.css';
function Carts({ carts, setCarts }) {
	return (
		<div className='carts-container'>
			<div className='carts-items-container'>
				{carts.map((cart) => {
					return (
						<Card style={{ width: '18rem' }} key={cart.id}>
							<Card.Img variant='top' src={cart.thumbnailUrl} />
							<Card.Body>
								<Card.Title>{cart.title}</Card.Title>
								<Card.Text>
									<b>${cart.price.toFixed(2)}</b>
								</Card.Text>

								<Button
									variant='outline-danger '
									onClick={() => {
										setCarts(carts.filter((c) => c.id !== cart.id));
									}}
								>
									remove From Carts
								</Button>
							</Card.Body>
						</Card>
					);
				})}
			</div>
			<h4>
				{' '}
				Item : {carts.length} items - Total peice : ${' '}
				{carts.reduce((prev, cart) => {
					return prev + cart.price;
				}, 0)}
			</h4>
		</div>
	);
}
export default Carts;
