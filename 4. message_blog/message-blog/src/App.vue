<template>
  <div id="app">
    <div class="mes-blog">
      <h2 style="margin:10px 0;">留言版</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=0 :user_msg="user_msg" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=1 :user_msg="user_msg" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=2 :user_msg="user_msg" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=3 :user_msg="user_msg" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=4 :user_msg="user_msg" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <mes :nubmer=5 :user_msg="user_msg" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23">
          <submit />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import mes from "./components/mes";
import submit from "./components/submit";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      user_msg: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/msg")
    .then((res)=>{
      this.user_msg=res.data;
    })
  },
  components: {
    mes,
    submit
  }
};
</script>

<style>
#app {
  /* border: 1px solid red; */
  max-width: 960px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  /* 字体抗锯齿 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #404040;
  margin-top: 0px;
  font-family: "plantc", "Source Han Serif", serif;
}
mes {
  margin: 0 auto;
}
.el-col {
  margin-bottom: 10px;
  /* border: 1px solid red; */
}
submit {
  margin-top: 15px;
}
</style>
