import Variable from '../Variable/Variable';
import { useEffect, useState } from 'react';
import './temperatures.css';
function Temperatures() {
	const [celsius, setCelsius] = useState(25.0);
	const [fahrenhit, setFahrenheit] = useState(77.0);
	const [kelvin, setKelvin] = useState(298.15);
	useEffect(() => {
		setFahrenheit(celsius * 1.8 + 32);
		setKelvin(celsius + 273.15);
	}, [celsius]);
	useEffect(() => {
		setCelsius((fahrenhit - 32) / 1.8);
		setKelvin((fahrenhit - 32) / 1.8 + 273.15);
	}, [fahrenhit]);
	useEffect(() => {
		setFahrenheit((kelvin - 273.15) * 1.8 + 32);
		setCelsius(kelvin - 273.15);
	}, [kelvin]);
	return (
		<div className='temperatures-variable'>
			<h3 className='temperatures-title'>Temperatures </h3>
			<h3 className='numbersdispaly'>
				<span className='badge bg-primary'>{celsius.toFixed(2)}C</span>
				<span className='badge bg-primary'> {fahrenhit.toFixed(2)}F</span>

				<span className='badge bg-primary'> {kelvin.toFixed(2)}K</span>
			</h3>
			<div className='temperatures-container'>
				<Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
				<Variable
					name={'Fahrenheit'}
					value={fahrenhit}
					setValue={setFahrenheit}
				/>
				<Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
			</div>
		</div>
	);
}
export default Temperatures;
