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
						@click="taskAction('doing')"
					>
						Doing
					</button>
					<button v-if="tarea.estado == 2"
						class="button-done"
						@click="taskAction('done')"
					>
						Done
					</button>
					<button class="button-delete" @click="taskAction('delete')">Delete</button>
			</p>
	</div>
  `,
	methods: {
		taskAction(name) {
			this.$emit("indexTaskAction", this.tarea.nombre, name);
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
