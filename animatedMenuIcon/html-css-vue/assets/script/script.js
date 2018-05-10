var hamburger = new Vue({
	el: "#menu",
	data: {
		menuClicked: false
	},
	methods: {
		clicked: function() {
			this.menuClicked = !this.menuClicked;
		}
	}
});