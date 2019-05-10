Vue.component('input-form', {
  props : [],
  data : function(){
    return {
      recipient : "",
      message : "",
      image : ""
    }
  },
  methods : {
    previewFile : function(event){
      this.image = event.target.files[0]      
    },
    submitInput : function(){
      // if(this.recipient == "" || this.message == "" ){
      //   console.log("dapet")
      //   swal("info", "complete the form below to make your card", "info");
        
      // } else {
        console.log("disini")
        console.log(this.recipient, this.message)
        this.$emit('newcard', { to : this.recipient, text : this.message, image : this.image })
        this.recipient = ""
        this.message = ""
        this.image = ""
        let submit = document.getElementById("submitbg")
        submit.value = ""
        if(!/safari/i.test(navigator.userAgent)){
          submit.type = ''
          submit.type = 'file'
        }
      // }
    }
  },
  template : `
  <form class="form" @submit.prevent="submitInput">
    <div class="form-group">
      <label>Upload a picture</label>
      <input type="file" @change="previewFile" id="submitbg" class="form-control-file">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `
})
