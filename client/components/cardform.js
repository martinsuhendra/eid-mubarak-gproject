Vue.component('input-form', {
  props : [],
  data : function(){
    return {
      recipient : "",
      message : "",
      image : "",
      dataStyle:"",
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
    <label>Select Style</label>
    <div class="d-flex">
      <div class="dropdown mr-1">
      <select class="custom-select" v-model="dataStyle">
        <option selected value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="dropdown-item" href="#">'Franklin Gothic Medium'</option>
        <option value="'Courier New', Courier, monospace;" class="dropdown-item" href="#">'Courier New'</option>
        <option value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;" class="dropdown-item" href="#">'Lucida Sans'</option>
        <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" class="dropdown-item" href="#">'Segoe UI'</option>
        <option value="'Times New Roman', Times, serif;" class="dropdown-item" href="#">'Times New Roman'</option>
        <option value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;" class="dropdown-item" href="#">'Trebuchet MS'</option>
        <option value="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" class="dropdown-item" href="#">-apple-system</option>
        <option value="Arial, Helvetica, sans-serif;" class="dropdown-item" href="#">Arial</option>
        <option value="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" class="dropdown-item" href="#">Cambria</option>
        <option value="Georgia, 'Times New Roman', Times, serif;" class="dropdown-item" href="#">Georgia</option>
        <option value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;" class="dropdown-item" href="#">Impact</option>
        <option value="Verdana, Geneva, Tahoma, sans-serif;" class="dropdown-item" href="#">Verdana</option>
      </select>
  </div>
    </div>
    <div class="form-group">
      <label>Upload a picture</label>
      <input type="file" @change="previewFile" id="submitbg" class="form-control-file">
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