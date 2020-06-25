const card = {
	props: ["tarea"],
	template: `
  <div class="card card-content"
  	:class="colorTask">
			<div class="situation">
					<div class="situation">
						<p class="situation-description" :class="stateTask">
							<strong>{{tarea.nombre}}</strong>
						</p>
					</div>
					<p class="situation-current" :class="markTask">
						{{markTask}}
					</p>
			</div>
			<p class="card-content-main buttons">
				<button v-if="tarea.estado == 1"
						class="button-doing"
						:class="showButton"
						@click="tareaRealizando()"
					>
						Doing
					</button>
					<button v-if="tarea.estado == 2"
						class="button-done"
						@click="tareaRealizado()"
					>
						Done
					</button>
					<button class="button-delete" @click="tareaEliminado()">Delete</button>
			</p>
	</div>
  `,
	methods: {
		tareaRealizando() {
			this.$emit("indexDoingTask", this.tarea.nombre);
		},
		tareaRealizado() {
			this.$emit("indexDoneTask", this.tarea.nombre);
		},
		tareaEliminado() {
			this.$emit("indexDeleteTask", this.tarea.nombre);
		},
	},
	computed: {
		colorTask() {
			let color = "";
			switch (this.tarea.estado) {
				case 3:
					color = "done";
					break;
				case 2:
					color = "doing";
					break;
				case 1:
					color = "todo";
					break;
			}
			return color;
		},
		stateTask() {
			let state = "";
			if (this.tarea.estado == 3) {
				state = "check";
			}
			return state;
		},
		markTask() {
			let mark = "";
			switch (this.tarea.estado) {
				case 3:
					mark = "done";
					break;
				case 2:
					mark = "doing";
					break;
				case 1:
					mark = "todo";
					break;
			}
			return mark;
		},
	},
};

export default card;
