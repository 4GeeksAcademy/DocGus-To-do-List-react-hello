import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lista, setLista] = useState(["Yoga", "Perro", "Trastes", "Jardin"])
	const [task, setTask] = useState("")

	const agregarTarea = (e) => {
		e.preventDefault()
		if (task == "") {
			alert("Debe ingresar la tarea")
		} else {
			setLista([...lista, task])
			setTask("")
		}

	}

	const eliminarTarea = (index) => {
		let aux = lista.filter((item, id) => {
			if (index != id) {
				return item
			}
		})
		setLista(aux)
	}

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">To do List</h1>
			<div className="mb-3">
				<input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
				<button className="btn btn-success" onClick={(e) => agregarTarea(e)}>Agregar Tarea</button>
			</div>
			<ul className="list-group">
				{lista.map((tarea, index) => (
					<li className="list-group-item" key={index}>

						{tarea}
						<button className="btn btn-danger float-end icono-oculto" onClick={() => eliminarTarea(index)}><i className="fa fa-trash"></i></button>
					</li>
				))}

			</ul>
		</div>
	);
};

export default Home;