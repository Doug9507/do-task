const cardheader = {
	props: ["counter", "message"],
	template: `
  <div class="wrapper-list-title">
			<img src="src/img/laptop-icon.svg" alt="icon" />
			<h3>{{ message }}: {{ counter }}</h3>
	</div>
  `,
};

export default cardheader;
