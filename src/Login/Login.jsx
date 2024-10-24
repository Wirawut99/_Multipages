// import { useRef } from 'react';
// import { verifyUser } from '../data/user';
// import './login.css';
// import Form from 'react-bootstrap/Form';

// function Login({ setToken }) {
// 	const useserref = useRef();
// 	const passref = useRef();
// 	return (
// 		<div className='Login-container'>
// 			<h1>Login</h1>
// 			<Form.Label htmlFor='username'>Username</Form.Label>
// 			<Form.Control
// 				type='text'
// 				id='username'
// 				placeholder='username'
// 				style={{ textAlign: 'center' }}
// 				ref={useserref}
// 			/>
// 			<Form.Label htmlFor='password'>Password</Form.Label>
// 			<Form.Control
// 				type='password'
// 				id='password'
// 				placeholder='password'
// 				style={{ textAlign: 'center' }}
// 				ref={passref}
// 			/>
// 			{/* <button
// 				className='btn btn-success mt-3'
// 				onClick={() => {
// 					const user = useserref.current.value.trim();
// 					const pass = passref.current.value.trim();
// 					const userInfo = verifyUser(user, pass);
// 					if (userInfo === null) {
// 						alert('user not found');
// 						useRef.current.value = '';
// 						passref.current.value = '';
// 						useRef.current.focus();
// 					} else {
// 						setToken(userInfo.token);
// 					}
// 				}}
// 			>
// 				Login
// 			</button> */}

// 		</div>
// 	);
// }

// export default Login;
import { useRef } from 'react';
import { verifyUser } from '../data/user';
import './login.css';
import Form from 'react-bootstrap/Form';


function Login({ setToken, setRole }) {
	const userRef = useRef();
	const passRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault(); // ป้องกันการรีเฟรชหน้า
		const user = userRef.current.value.trim();
		const pass = passRef.current.value.trim();
		const userInfo = verifyUser(user, pass);
		if (userInfo === null) {
			alert('User not found');
			userRef.current.value = '';
			passRef.current.value = '';
			userRef.current.focus();
		} else {
			setToken(userInfo.token);
			setRole(userInfo.role);
		}
	};

	return (
		<div className='Login-container'>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Label htmlFor='username'>Username</Form.Label>
				<Form.Control
					type='text'
					id='username'
					placeholder='username'
					style={{ textAlign: 'center' }}
					ref={userRef}
				/>
				<Form.Label htmlFor='password'>Password</Form.Label>
				<Form.Control
					type='password'
					id='password'
					placeholder='password'
					style={{ textAlign: 'center' }}
					ref={passRef}
				/>
				<button className='btn btn-success mt-3' type='submit'>
					Login
				</button>
			</Form>
		</div>
	);
}

export default Login;
