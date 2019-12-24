<template>
  <div class="msg">
    <h2 class="msg-h2">写新留言</h2>
    <textarea name="msg-name" id="mes-name" placeholder="昵称(选填)" v-model="namedata"></textarea>
    <textarea name="msg-content" id="mes-content" placeholder="有什么想和我说的，畅所欲言吧！" v-model="notedata"></textarea>
    <el-button type="info" id="msg-submit" @click="submit">留言</el-button>
  </div>
</template>
<script>
import axios from "axios";
import Date from "../assets/js/Method";
export default {
  name: "submit",
  data() {
    return {
      namedata: null,
      notedata: null
    };
  },
  methods: {
    submit: function() {
      var time=Date();
      console.log(time);
      var postData = { name: this.namedata, msg: this.notedata ,mes_time:time };
      console.log(postData);
      axios
        .post("http://localhost:3000/submit", postData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style>
.msg {
  margin: 0 auto;
  /* border: 1px solid red; */
  text-align: center;
}
.msg-h2 {
  text-align: center;
  /* border: 1px solid red; */
}
textarea {
  font-size: 16px;
  color: #404040;
  font-family: "plantc", "Source Han Serif", serif;
  max-width: 500px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
#mes-name {
  height: 20px;
}
#mes-content {
  height: 200px;
  margin-top: 8px;
}
#msg-submit {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
</style>