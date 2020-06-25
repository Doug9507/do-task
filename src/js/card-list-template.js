import card from "./card-template.js";

const cards = {
	props: ["tareas"],
	template: `
  <div><card v-for="tarea of tareas" :tarea="tarea" @indexDoneTask="tareaRealizado" @indexDeleteTask="tareaEliminado" @indexDoingTask="tareaRealizando"/></div>
  `,
	components: {
		card: card,
	},
	methods: {
		tareaRealizando(nombre) {
			//encontrado objeto
			const index = this.tareas.findIndex((elemento) => elemento.nombre == nombre);
			//obteniendo objeto
			const task = this.tareas.splice(index, 1);
			//modificando estado
			task[0].estado = 2;
			//agregando a array destino
			this.$root.doingTask.push(task[0]);
			//agregando al local storage
			localStorage.setItem("tareas", JSON.stringify(this.$root.tareas));
			localStorage.setItem("tareasDoing", JSON.stringify(this.$root.doingTask));
		},
		tareaRealizado(nombre) {
			//encontrado objeto
			const index = this.$root.doingTask.findIndex((elemento) => elemento.nombre == nombre);
			//obteniendo objeto
			const task = this.$root.doingTask.splice(index, 1);
			//modificando estado
			task[0].estado = 3;
			//agregando a array destino
			this.$root.doneTask.push(task[0]);
			//agregando al local storage
			localStorage.setItem("tareasDoing", JSON.stringify(this.$root.doingTask));
			localStorage.setItem("tareasDone", JSON.stringify(this.$root.doneTask));
		},
		tareaEliminado(nombre) {
			//encontrado objeto
			const indexDone = this.$root.doneTask.findIndex((elemento) => elemento.nombre == nombre);
			const indexDoing = this.$root.doingTask.findIndex((elemento) => elemento.nombre == nombre);
			const indexTodo = this.$root.tareas.findIndex((elemento) => elemento.nombre == nombre);

			//actualizando arreglo correspondiente
			if (indexDone > -1) {
				this.$root.doneTask.splice(indexDone, 1);
				localStorage.setItem("tareasDone", JSON.stringify(this.$root.doneTask));
			}

			if (indexDoing > -1) {
				this.$root.doingTask.splice(indexDoing, 1);
				localStorage.setItem("tareasDoing", JSON.stringify(this.$root.doingTask));
			}

			if (indexTodo > -1) {
				this.$root.tareas.splice(indexTodo, 1);
				localStorage.setItem("tareas", JSON.stringify(this.$root.tareas));
			}
		},
	},
};

export default cards;
