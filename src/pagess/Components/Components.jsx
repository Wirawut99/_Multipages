import { useState } from 'react';
import './Components.css';
import Counter from './counter/counter';
import Timer from './timer/timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Temperatures from './temperatures/temperatures';

import Add from './Add/add';

function Components() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1 className='name'> REACT COMPONENTS</h1>
			<div className='content'>
				<div>
					<Counter name='COUNTER' />
					<Timer />
				</div>
				<div className='add'>
					<Add />
				</div>

				<div className='temp'>
					<Temperatures />
				</div>
			</div>
			<h1 className='name'>นาย วีรวุฒิ ชีอยู่ รหัส 66037290</h1>
		</div>
	);
}
export default Components;
