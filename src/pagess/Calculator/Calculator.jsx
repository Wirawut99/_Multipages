import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
	const [numset1, setNumset1] = useState('');
	const [numset, setNumset] = useState('0');
	const [operator, setOperator] = useState('');

	const updisplay = (text) => {
		return text; // ฟังก์ชันนี้ไม่จำเป็นต้องอัปเดต DOM ใน React
	};

	const calculate = () => {
		const number1 = parseFloat(numset1);
		const number2 = parseFloat(numset);
		let result;

		switch (operator) {
			case '+':
				result = number1 + number2;
				break;
			case '-':
				result = number1 - number2;
				break;
			case '*':
				result = number1 * number2;
				break;
			case '/':
				result = number1 / number2;
				break;
			default:
				return;
		}

		setNumset1(result.toString());
		setNumset('');
		setOperator('');
		updisplay(result);
	};

	const handleOperator = (op) => {
		setNumset1(numset);
		setNumset('');
		setOperator(op);
	};

	const handleClear = () => {
		setNumset1('');
		setNumset('0');
		setOperator('');
		updisplay('0');
	};

	const handleBackspace = () => {
		setNumset(numset.slice(0, -1) || '0');
	};

	const handleNumberClick = (number) => {
		if (numset === '0') {
			setNumset(number);
		} else {
			setNumset(numset + number);
		}
	};

	return (
		<div className='container'>
			<header>
				<h1 id='displays'>Calculator</h1>
			</header>
			<section>
				<main>
					<article>
						<h1 id='display'>{numset || '0'}</h1>
					</article>
					<section>
						<button
							id='clear'
							className='b primary2'
							type='button'
							onClick={handleClear}
						>
							c
						</button>
						<button
							id='backspead'
							className='b primary2'
							type='button'
							onClick={handleBackspace}
						>
							delete
						</button>
						<button id='percent' className='b primary2' type='button'>
							%
						</button>
						<button
							id='multiply'
							className='b primary'
							type='button'
							onClick={() => handleOperator('*')}
						>
							*
						</button>
					</section>
					<section>
						{[7, 8, 9].map((num) => (
							<button
								key={num}
								className='b'
								type='button'
								onClick={() => handleNumberClick(num.toString())}
							>
								{num}
							</button>
						))}
						<button
							id='minus'
							className='b primary'
							type='button'
							onClick={() => handleOperator('-')}
						>
							-
						</button>
					</section>
					<section>
						{[6, 5, 4].map((num) => (
							<button
								key={num}
								className='b'
								type='button'
								onClick={() => handleNumberClick(num.toString())}
							>
								{num}
							</button>
						))}
						<button
							id='plus'
							className='b primary'
							type='button'
							onClick={() => handleOperator('+')}
						>
							+
						</button>
					</section>
					<section>
						{[3, 2, 1].map((num) => (
							<button
								key={num}
								className='b'
								type='button'
								onClick={() => handleNumberClick(num.toString())}
							>
								{num}
							</button>
						))}
						<button
							id='divide'
							className='b primary'
							type='button'
							onClick={() => handleOperator('/')}
						>
							/
						</button>
					</section>
					<section>
						<button
							className='b'
							type='button'
							onClick={() => handleNumberClick('0')}
						>
							0
						</button>
						<button
							className='b'
							type='button'
							onClick={() => handleNumberClick('.')}
						>
							.
						</button>
						<button
							id='equal'
							className='b primary2'
							type='button'
							onClick={calculate}
						>
							=
						</button>
					</section>
				</main>
			</section>
		</div>
	);
};

export default Calculator;
