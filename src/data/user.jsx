const users = [
	{
		user: 'user',
		pass: 'pass',
		role: 'admin',
		token: 'user',
	},
];
// export function verifyUser(user, pass) {
// 	const userInfo = users.find((u) => {
// 		return u.user === user && u.pass === pass;
// 	});
// 	// return userFound ? { role: userFound.role, token: userFound.token } : null;

// }
export function verifyUser(username, password) {
	let userFound; // ประกาศตัวแปร userFound

	if (username === 'username' && password === 'password') {
		userFound = { token: 'dummy-token' }; // ตั้งค่า userFound ถ้าผู้ใช้ถูกต้อง
	}

	return userFound || null; // คืนค่า userFound ถ้ามี หรือคืนค่า null ถ้าไม่พบ
}
