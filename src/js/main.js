const app = new Vue({
	el: "#app",
	data: {
		tareas: [],
		nuevaTarea: "",
	},
	methods: {
		agregarTarea() {
			if (this.nuevaTarea !== "") {
				this.tareas.push({ nombre: this.nuevaTarea, estado: false });
				// console.log({nombre:this.nuevaTarea,estado:false})
				// console.log(this.tareas)
				localStorage.setItem("tareas", JSON.stringify(this.tareas));
				this.nuevaTarea = "";
			} else {
				swal("Alto!", "Escribe algo!", "warning");
			}
		},
		tareaRealizado(index) {
			// console.log(this.tareas[index])
			this.tareas[index].estado = true;
			localStorage.setItem("tareas", JSON.stringify(this.tareas));
		},
		tareaEliminado(index) {
			this.tareas.splice(index, 1);
			localStorage.setItem("tareas", JSON.stringify(this.tareas));
		},
	},
	created: function () {
		// console.log(JSON.parse(localStorage.getItem('tareas')))
		const localDB = JSON.parse(localStorage.getItem("tareas"));
		if (localDB) {
			this.tareas = localDB;
		} else {
			this.tareas = [];
		}
	},
});
