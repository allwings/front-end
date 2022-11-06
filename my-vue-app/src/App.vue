<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <div>
    <button @click="getData()">获取api数据</button>
  </div>
  <h2>gg</h2>
</template>

<script>
//1、引入 axios 模块
import axios from 'axios'
export default {
  data() {
    return {
      msg: "主页"
    }
  },
  methods:{
   getData(){
      var api="http://172.27.140.57:8900/js/a/index#/js/a/sentiment/sentiment/listData";
      //2.使用axios 进行get请求
      axios.get(api).then((res)=>{
        //请求成功的回调函数
        console.log(res)

        
      }).catch((err)=>{
        //请求失败的回调函数
        console.log(err)
      })

      /*
      axios({
        methods: 'post',
        url: 'http://jsonplaceholder.typicode.com/users',
        data: { // 这里展示post请求
            name: 'qiurx'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      */
   }

  }
};
</script>
