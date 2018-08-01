<template>
    <div id="app">
     
        <router-view></router-view>
    </div>
</template>

<script>
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
      background:#ebebeb;

    }
</style>
