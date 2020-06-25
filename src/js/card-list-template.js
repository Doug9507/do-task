import card from "./card-template.js";

const cards = {
	props: ["tareas", "moverA"],
	template: `
  <div><card v-for="tarea of tareas" :tarea="tarea"  @indexTaskAction="actionMove"/></div>
  `,
	components: {
		card: card,
	},
	methods: {
		actionMove(nombre, name) {
			//encontrado objeto
			const index = this.tareas.findIndex((elemento) => elemento.nombre == nombre);
			//obteniendo objeto
			const task = this.tareas.splice(index, 1);
			//actualizar storage
			this.actualizarStorage();

			if (name !== "delete") {
				switch (this.moverA) {
					case "doingTask":
						// //modificando estado
						task[0].estado = 2;
						this.$root[this.moverA].push(task[0]);
						this.actualizarStorage();
						break;
					case "doneTask":
						task[0].estado = 3;
						this.$root[this.moverA].push(task[0]);
						this.actualizarStorage();
						break;
					default:
						break;
				}
			}
		},
		actualizarStorage() {
			//agregando al local storage
			localStorage.setItem("tareas", JSON.stringify(this.$root.tareas));
			localStorage.setItem("tareasDoing", JSON.stringify(this.$root.doingTask));
			localStorage.setItem("tareasDone", JSON.stringify(this.$root.doneTask));
		},
	},
};

export default cards;
