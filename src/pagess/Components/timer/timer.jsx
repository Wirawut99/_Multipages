import { useEffect, useState } from 'react';
import './timer.css';

function Timer() {
	const [running, setRunning] = useState(false);
	const [seconds, setSeconds] = useState(3600 - 1);

	useEffect(() => {
		let interval = null;
		if (running) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);
		} else if (!running && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running, seconds]);

	function Run() {
		setRunning(!running);
	}

	function Reset() {
		setRunning(false);
		setSeconds(0);
	}

	function secondstostring(seconds) {
		const Minute_seconds = 60;
		const Hour_seconds = 60 * Minute_seconds;
		const Day_seconds = 24 * Hour_seconds;
		const Day = Math.floor(seconds / Day_seconds);
		const Hour = Math.floor((seconds % Day_seconds) / Hour_seconds);
		const Minute = Math.floor((seconds % Hour_seconds) / Minute_seconds);
		const Second = Math.floor(seconds % Minute_seconds);
		if (Day > 0) {
			return `${Day}d ${Hour}h ${Minute}m ${Second}s`;
		}
		if (Hour > 0) {
			return `${Hour}h ${Minute}m ${Second}s`;
		}
		if (Minute > 0) {
			return `${Minute}m ${Second}s`;
		}
		return `${Second}s`;
	}

	return (
		<div className='timer-container'>
			<h1 className='timer-title'>Timer</h1>
			<p>
				<input
					type='text'
					className='timer-input'
					readOnly={true}
					value={secondstostring(seconds)}
				/>
			</p>
			<div className='timer-button'>
				<button className='btn btn-primary' onClick={Reset}>
					reset
				</button>
				<button className='btn btn-success' onClick={Run}>
					start
				</button>
			</div>
		</div>
	);
}

export default Timer;
