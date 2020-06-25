const formview = {
	data: function () {
		return {
			nuevaTarea: "",
		};
	},
	template: `
  <form action="" method="POST" class="save-zone" @submit.prevent="agregarTarea">
						<div class="save-zone-box-before">
              <input
              v-model="nuevaTarea"
								type="text"
								class="save-zone-box"
								placeholder="Add a new task..."
							/>
						</div>
						<input type="submit" value="SAVE" class="save-zone-button" />
						<p class="save-zone-description">Add more tasks...</p>
	</form>
  `,
	methods: {
		agregarTarea() {
			if (this.nuevaTarea !== "") {
				this.$root.tareas.push({ nombre: this.nuevaTarea, estado: 1 });
				localStorage.setItem("tareas", JSON.stringify(this.$root.tareas));
				this.nuevaTarea = "";
			} else {
				swal("Stop!", "You  must write something...!", "warning");
			}
		},
	},
};

export default formview;
