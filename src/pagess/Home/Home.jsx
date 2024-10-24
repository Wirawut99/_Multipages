import './Home.css';
import React from 'react';
function Home() {
	return (
		<div className='profile-container'>
			<img
				src='./public/stdempimg.jpg'
				// src='./public/stdempimg.jpg' // แทนที่ URL นี้ด้วยรูปภาพจริงของคุณ
				alt='Profile'
				className='profile-image'
			/>
			<div className='profile-info'>
				<h2>ชื่อ:นาย วีรวุฒิ ชีอยู่ รหัส 66037290</h2>
				<p>
					คณะ เทคโนโลยีสารสนเทศ สาขาวิชา
					วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ หลักสูตรตรีเช้า
					(Software Full Stack Development)
				</p>
			</div>
		</div>
	);
}
export default Home;
