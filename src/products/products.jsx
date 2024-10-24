import './products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function product({ products, carts, setCarts }) {
	return (
		<div className='carts-container'>
			<div className='product-items-container'>
				{products.map((product) => {
					return (
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={product.thumbnailUrl} />
							<Card.Body>
								<Card.Title>{product.title}</Card.Title>
								<Card.Text>
									<b>${product.price.toFixed(2)}</b>
								</Card.Text>
								{carts.find((carts) => carts.id === product.id) ? (
									<span className='badge bg-danger'>Added</span>
								) : (
									<Button
										variant='outline-primary '
										onClick={() => setCarts([...carts, product])}
									>
										Add to Cart
									</Button>
								)}
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default product;
