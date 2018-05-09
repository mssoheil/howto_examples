var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
			console.log(this.$refs.soheil);
			this.$refs.soheil.innerHTML = "test";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

console.log(vm1);

var vm2 = new Vue({
	el: '#app2',
  data: {
    title: 'The second VueJS Instance',
  },
	methods: {
		onChange: function() {
			vm1.title = 'changed!';
		}
	}
});
