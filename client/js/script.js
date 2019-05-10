const baseURL = "http://localhost:3000";

var app = new Vue({
  el: "#app",
  data: {
    card: "",
    image: "",
    message: "",
    to: "",
    email: "",
    password: "",
    isLogin: "",
    page: "home"
  },
  methods: {
    generatecard(el) {
      var file = el.image;
      var reader = new FileReader();
      reader.onloadend = function() {
        $("#canvas").css("background-image", 'url("' + reader.result + '")');
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      this.card = {
        to: el.to,
        message: el.text,
        image: reader.result
      };
    },
    login() {
      axios
        .post(`${baseURL}/login`, {
          email: this.email,
          password: this.password
        })
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("token", data.access_token);
          this.isLogin = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCard() {
      this.page = "card";
    },
    logout() {
      this.isLogin = false;
      localStorage.clear();
      this.page = "home";
    }
  },
  events: {},
  created() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
    }
  }
});
