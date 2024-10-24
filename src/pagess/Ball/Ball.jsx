import React, { useEffect, useState } from 'react';
import './Ball.css'; // อย่าลืมเพิ่ม CSS ที่คุณต้องการ

const Ball = () => {
	// ค่าคงที่
	const fieldWidth = 700;
	const fieldHeight = 500;
	const diameter = 100;
	const maxLeft = fieldWidth - diameter;
	const maxTop = fieldHeight - diameter;
	const vx = 5; // ความเร็วในแนวนอน
	const vy = 5; // ความเร็วในแนวตั้ง
	const rotationSpeed = 5;

	// ตัวแปรใน state
	const [running, setRunning] = useState(false);
	const [goRight, setGoRight] = useState(true);
	const [goDown, setGoDown] = useState(true);
	const [x, setX] = useState(5);
	const [y, setY] = useState(5);
	const [rotation, setRotation] = useState(0);
	const [ballImage, setBallImage] = useState('');

	// ฟังก์ชันเริ่มหยุดการเคลื่อนไหว
	const toggleRun = () => {
		setRunning((prev) => !prev);
	};

	// ฟังก์ชันคำนวณตำแหน่งของบอล
	const calculate = () => {
		let newX = goRight ? x + vx : x - vx;
		let newY = goDown ? y + vy : y - vy;

		// ตรวจสอบการชนขอบ
		if (newX >= maxLeft || newX <= 0) {
			setGoRight((prev) => !prev);
			newX = newX >= maxLeft ? maxLeft : 0; // กำหนดตำแหน่งใหม่
			setRotation((prev) => prev + rotationSpeed); // หมุนบอล
		}

		if (newY >= maxTop || newY <= 0) {
			setGoDown((prev) => !prev);
			newY = newY >= maxTop ? maxTop : 0; // กำหนดตำแหน่งใหม่
			setRotation((prev) => prev + rotationSpeed); // หมุนบอล
		}

		setX(newX);
		setY(newY);
	};

	// ฟังก์ชันเรนเดอร์บอล
	const renderBall = () => {
		const ball = document.getElementById('ball');
		ball.style.left = x + 'px';
		ball.style.top = y + 'px';
		ball.style.transform = `rotate(${rotation}deg)`;
		ball.style.backgroundImage = ballImage; // ตั้งค่าภาพของบอล
	};

	// ใช้ useEffect เพื่ออัปเดตการเคลื่อนไหว
	useEffect(() => {
		const interval = setInterval(() => {
			if (running) {
				calculate();
				renderBall();
			}
		}, 25); // อัปเดตทุก 25 มิลลิวินาที

		return () => clearInterval(interval); // เคลียร์เมื่อคอมโพเนนต์ถูกทำลาย
	}, [running, x, y, goRight, goDown, rotation, ballImage]);

	// ฟังก์ชันเริ่มต้นฟิลด์
	const initial = () => {
		const field = document.getElementById('field');
		field.style.width = fieldWidth + 'px';
		field.style.height = fieldHeight + 'px';

		const ball = document.getElementById('ball');
		ball.style.width = diameter + 'px';
		ball.style.height = diameter + 'px';
	};

	// กำหนดค่าภาพบอล
	const setBallType = (image) => {
		setBallImage(`url(${image})`);
	};

	useEffect(() => {
		initial();
	}, []);

	return (
		<div id='container'>
			<div id='field'>
				<div
					id='ball'
					style={{ position: 'absolute', backgroundColor: 'red' }}
				></div>
			</div>
			<div id='control'>
				<button className='btn btn-success' onClick={toggleRun}>
					{running ? 'Pause' : 'Run'}
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./bas.png')}
				>
					Basketball
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./volleyball.jpg')}
				>
					Volleyball
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./football.jpg')}
				>
					Football
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./stdempimg.jpg')}
				>
					Human
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./images.jpg')}
				>
					Cartoon
				</button>
				<button
					className='btn btn-success'
					onClick={() => setBallType('./Untitled.png')}
				>
					Logo
				</button>
			</div>
		</div>
	);
};

export default Ball;
