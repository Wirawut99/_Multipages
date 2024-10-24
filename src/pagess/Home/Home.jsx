import './Home.css';
import React from 'react';
function Home() {
	return (
		<div className='profile-container'>
			<img
				src='https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=0AD0CFEDD585F6A50528CED5D804C3D482E1170BD5FED7D1'
				alt=''
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
