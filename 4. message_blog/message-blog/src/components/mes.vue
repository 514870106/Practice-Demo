<template>
  <el-row :gutter="0">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <img class="head-img" src="../assets/img/default.png" alt="头像" />
      <h3 class="user-name">{{ name }}</h3>
      <p class="user-msg">{{ msg }}</p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "mes",
  props: {
    nubmer: Number,
    user_msg: Array,
  },
  computed: {
    name:function(){
      return ((this.user_msg||{})[this.nubmer]||{}).name
    },
    msg:function(){
      return ((this.user_msg||{})[this.nubmer]||{}).msg
    }
  },
}
</script>
<style>
.head-img {
  width: 26px;
  height: 26px;
  border-radius: 30px;
  /* border: 1px solid red; */
}
.user-name,
.head-img {
  display: inline-block;
  line-height: 37px;
  vertical-align: middle;
}
.head-img {
  margin: 0px;
  margin-right: 10px;
  font-size: 16px;
}
.user-msg {
  margin: 0px;
  font-size: 14px;
  /* border: 1px solid red; */
}
</style>