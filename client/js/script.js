const baseURL = 'http://localhost:3000'

var app = new Vue({
    el: '#app',
    data: {
      image: '',
      message : "",
      to : ""
    },
    methods: {
      generatecard(el){
        // kirim gambar ke server
        var file = el.image;
        var reader = new FileReader();
        reader.onloadend = function () {
           $('#canvas').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
        }
        let recipient = document.getElementById('recipient')
        let message = document.getElementById('message')
        recipient.innerHTML = "To dearest, " + el.to;
        message.innerHTML = `"${el.text}"`
      }
    },
    events: {

    }, 
    created() {
        
    },
  })


