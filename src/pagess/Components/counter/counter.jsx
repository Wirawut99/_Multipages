import { useState } from 'react';
import './counter.css';
function Counter(props) {
	// let value = props.value;
	const [value, setValue] = useState(props.value || 0);
	function increment() {
		setValue(value + 1);
		console.log(value);
	}
	function decrment() {
		setValue(value - 1);
		console.log(value);
	}
	return (
		<div className='counter-container'>
			<h3 className='counter-title '>{props.name}</h3>
			<button className='counter-button counter-dec' onClick={decrment}>
				-
			</button>
			<span className='counter-value '> {value}</span>
			<button className='counter-button counter-inc' onClick={increment}>
				+
			</button>
		</div>
	);
}

export default Counter;
