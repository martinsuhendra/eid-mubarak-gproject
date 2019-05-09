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
      if(this.recipient == "" || this.message == "" ){
        console.log("dapet")
        //
        swal({
          
        });
      } else {
        console.log("disini")
        console.log(this.recipient, this.message)
        this.$emit('newcard', { to : this.recipient, text : this.message, image : this.image })
      }
    }
  },
  template : `
  <form class="form" @submit.prevent="submitInput">
    <div class="form-group">
      <label >Recipient Name</label>
      <input type="text" class="form-control" v-model="recipient" placeholder="Enter recipient name">
    </div>
    <div class="form-group">
      <label >Message</label>
      <input type="text" class="form-control" v-model="message" placeholder="Enter your message">
    </div>
    <div class="form-group">
      <label>Upload a picture</label>
      <input type="file" @change="previewFile" class="form-control-file">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `
})

Vue.component('result', {
  props : [],
  data : function(){
    return {
      to : "",
      text : "",
      url : ""
    }
  },
  template : `
  
  `
})