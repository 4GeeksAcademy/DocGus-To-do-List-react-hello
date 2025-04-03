import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lista, setLista] = useState([]);
	const [task, setTask] = useState("");

	const agregarTarea = (e) => {
		e.preventDefault();
		if (task.trim() === "") {
			alert("Debe ingresar la tarea");
		} else {
			setLista([...lista, task.trim()]);
			setTask("");
		}
	};

	const eliminarTarea = (index) => {
		let aux = lista.filter((_, id) => index !== id);
		setLista(aux);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			agregarTarea(e);
		}
	};

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">To do List</h1>
			<div className="mb-3">
				<input 
					type="text" 
					className="form-control" 
					value={task} 
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={handleKeyDown} // <- Aquí se agrega el evento
				/>
				<button className="btn btn-success mt-2" onClick={agregarTarea}>Agregar Tarea</button>
			</div>
			<ul className="list-group">
				{lista.map((tarea, index) => (
					<li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
						{tarea}
						<button className="btn btn-danger" onClick={() => eliminarTarea(index)}>
							<i className="fa fa-trash"></i>
						</button>
					</li>
				))}
			</ul>
			<div className="mt-3">
				{lista.length} Tareas Pendientes
			</div>
		</div>
	);
};

export default Home;
