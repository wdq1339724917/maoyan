<template>
    <div id="app">
     
        <router-view></router-view>
    </div>
</template>

<script>
  import login from "./views/login"
 
export default {
  name: 'App',
  data(){
    return{

    }
  },
}
</script>

<style>
  *{
      padding:0;
      margin:0;

    }
    html,body{
      height:100%;
      background: #f8f8f8;
     

    }
 
 a{
  text-decoration: none;
  color:black;
 }
</style>
