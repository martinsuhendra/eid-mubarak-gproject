Vue.component('result-card', {
  props : ["i", "m", "t"],
  data : function(){
    return {
      fburl : "",
      url : "",
      twurl: "",
      linurl : ""
    }
  },
  methods : {
    screenshot(){
      console.log("screenshot layar")
      html2canvas(document.getElementById('canvas')).then( (canvas) => {
        var base64URL = canvas.toDataURL('image/png')
        axios.
        post('http://localhost:3000/upload',{
            image: base64URL
        })
        .then((data) => {
          console.log(data)
          this.url = data.data
          let url = this.url.replace(":","%3A")
          // https%3A//storage.googleapis.com/kartu-lebaran/upload/1557471469708undefined
          this.fburl = "https://www.facebook.com/sharer/sharer.php?u=" + url
          this.twurl = "https://twitter.com/intent/tweet?url=" + url
          this.linurl = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=Selamat%20idul%20fitri%20semuanya&summary=&source="
          console.log("dapet url share nya")
        })
        .catch((err) => {
          console.log("error di axios")
          console.log(err)
        })
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
    <div class="row">
      <div class="col"
        <button type="button" class="btn btn-primary" @click.prevent="screenshot"> Save</button> 
      </div>
      <div class="col" v-if="fburl">
        <div class="fb-share-button" v-bind:data-href="url" data-layout="button_count" data-size="small">
          <button><a v-bind:href="fburl" class="fb-xfbml-parse-ignore">Share on Facebook</a></button>
        </div>
      </div>
      <div class="col" v-if="twurl">
        <button>
          <a v-bind:href="twurl"> Share on Twitter</a>
        </button>
      </div>
      <div class="col" v-if="linurl">
        <button>
          <a v-bind:href="linurl">Share on LinkedIn</a>
        </button>
      </div>
      <div class="col" v-if="url">
        <button>
          <a v-bind:href="url" download="myimage">Download</a>
        </button>
      </div>
    </div>
  </div>
  `
})
