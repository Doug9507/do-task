import headerview from "./header-view-template.js";
import cards from "./card-list-template.js";
import cardheader from "./cards-header-template.js";
import footerview from "./footer-view-template.js";
import formview from "./form-view-template.js";

const app = new Vue({
	el: "#app",
	data: {
		tareas: [],
		doingTask: [],
		doneTask: [],
		message: { pending: "To Do", doing: "Doing", done: "Done" },
	},
	methods: {},
	created: function () {
		const localDBtodo = JSON.parse(localStorage.getItem("tareas"));
		const localDBdoing = JSON.parse(localStorage.getItem("tareasDoing"));
		const localDBdone = JSON.parse(localStorage.getItem("tareasDone"));
		if (localDBtodo) {
			this.tareas = localDBtodo;
		} else {
			this.tareas = [];
		}
		if (localDBdoing) {
			this.doingTask = localDBdoing;
		} else {
			this.doingTask = [];
		}
		if (localDBdone) {
			this.doneTask = localDBdone;
		} else {
			this.doneTask = [];
		}
	},
	components: {
		headerview,
		formview,
		cardheader,
		cards,
		footerview,
	},
});
