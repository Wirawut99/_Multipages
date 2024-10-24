import { useState, useEffect } from 'react';
import { fetchTodos } from '../../data/todo';
import './Todo.css';
function Todo() {
	//todosRaw -> fillter -> todos
	const [todosRaw, setTodosRaw] = useState([]);
	//filters
	const [onlywaiting, setOnlywaiting] = useState(false);
	const [itemsPerPage, setItemsPerPage] = useState(5);
	//todos
	const [todos, setTodos] = useState([]);
	//display
	const [numpage, setNumPage] = useState(1);
	const [curPage, setCurPage] = useState(1);
	useEffect(() => {
		console.log(curPage);
	}, [curPage]);
	useEffect(() => {
		setCurPage((prev) => {
			prev > numpage ? numpage : prev;
		});
	}, [numpage]);

	useEffect(
		() => {
			console.log(itemsPerPage);
			setNumPage(Math.ceil(todosRaw.length / itemsPerPage));
		},
		[itemsPerPage],
		todosRaw.length
	);
	useEffect(() => {
		setTodosRaw(fetchTodos());
	}, []); // load first
	useEffect(() => {
		console.log(onlywaiting);
	}, [onlywaiting]);

	useEffect(() => {
		if (onlywaiting) {
			setTodos(todosRaw.filter((todo) => todo.completed === false));
		} else {
			setTodos(todosRaw);
		}
	}, [todosRaw, onlywaiting, itemsPerPage]);
	// even handler
	function deleteClick(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}
	function waitingClick(id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}
	return (
		<div className='todo-container'>
			{/* fillter */}
			<div className='todo-filter-container'>
				<div className='form-check form-switch'>
					<input
						className='form-check-input'
						type='checkbox'
						role='switch'
						id='flexSwitchCheckChecked'
						// checked
						onClick={(e) => {
							setOnlywaiting(e.target.checked);
						}}
					/>
					<label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
						Show only &nbsp;{' '}
						<button className='btn btn-warning'>
							waiting &nbsp;
							<span className='bi bi-clock'></span>
						</button>
					</label>
				</div>
				<select
					className='form-select'
					aria-label='Default select example'
					defaultValue={5}
					style={{ width: '6rem' }}
					onChange={(e) => {
						setItemsPerPage(e.target.value);
					}}
				>
					{/* <option selected>Open this select menu</option> */}
					<option value={5} selected>
						5 item per page
					</option>
					<option value={10}>10 item per page</option>
					<option value={50}>50 item per page</option>
					<option value={100}>100 item per page</option>
				</select>
			</div>
			{/* table */}
			<table className='table table-striped'>
				<thead className='table-dark'>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th style={{ textAlign: 'right' }}>Completed</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<td>
							<span className='badge bg-secondary'> 1</span>
						</td>
						<td style={{ ttextAlign: 'left' }}>do some</td>
						<td style={{ textAlign: 'right' }}>
							done{' '}
							<button className='btn btn-danger'>
								<span className='bi bi-trash'></span>
							</button>
						</td>
					</tr>
					 */}
					{todos.map((todo) => {
						return (
							<tr key={todo.id}>
								<td>
									<span className='badge bg-secondary'>{todo.id} </span>
								</td>
								<td style={{ ttextAlign: 'left' }}>{todo.title}</td>
								<td style={{ textAlign: 'right' }}>
									<button
										className='btn btn-warning'
										onClick={() => {
											waitingClick(todo.id);
										}}
									>
										<span
											className={
												'badge ' +
												(todo.completed ? 'bg-success' : 'bg-warning')
											}
										>
											{todo.completed ? 'done' : 'waiting'}{' '}
										</span>
									</button>
									<span
										className={
											'bi ' + (todo.completed ? 'bi-check' : 'bi-clock')
										}
									>
										{' '}
									</span>
									<button
										className='btn btn-danger'
										onClick={() => {
											deleteClick(todo.id);
										}}
									>
										<span className='bi bi-trash'></span>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* page con */}
			<div>
				<button className='btn btn-outline-primary todo-space'>Frist</button>
				<button className='btn btn-outline-primary'>Previous</button>

				<span className='todo-space'>
					{' '}
					{curPage}1/
					{numpage}
				</span>
				<button className='btn btn-outline-primary todo-space'>Next</button>
				<button className='btn btn-outline-primary'>Last</button>
			</div>
		</div>
	);
}

export default Todo;
