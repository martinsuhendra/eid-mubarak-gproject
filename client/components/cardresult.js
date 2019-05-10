Vue.component('result-card', {
  props : ["i", "m", "t"],
  data : function(){
    return {

    }
  },
  methods : {
    screenshot(){
      console.log("screenshot layar")
      html2canvas(document.getElementById('canvas')).then( (canvas) => {
        var base64URL = canvas.toDataURL('image/png')
        console.log(base64URL)
        // axios.
        // post('http://localhost:3000/upload',{
        //     image: base64URL
        // })
        // .then((data) => {
        //   console.log('masuk sini')
        //   this.imageUrl = data.data
        //   console.log(this.imageUrlTwitter)
        // })
        // .catch((err) => {
        //   console.log(err)
        // })
      });
    },
  },
  template : `
  <div>
    <div class="box" id="canvas" style="background-image : url('i');">
      <div class="container">
        <br>
        <h1 id="recipient" class="text-right">
          {{t}}
        </h1>
        <br>
        <p id="message" class="text-right">
          {{m}}
        </p>
      </div>
    </div>
    <br>
    <button type="button" class="btn btn-primary" @click="screenshot"> Save</button>
  </div>
  `
})
