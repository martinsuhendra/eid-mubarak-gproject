const baseURL = 'http://localhost:3000'

var app = new Vue({
    el: '#app',
    data: {
      card : ""
    },
    methods: {
      generatecard(el){
        var file = el.image;
        var reader = new FileReader();
        reader.onloadend = function () {
           $('#canvas').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
        }
        this.card = {
          to : el.to,
          message : el.text,
          image : reader.result
        }
      }
    },
    events: {

    }, 
    created() {
        
    },
  })


