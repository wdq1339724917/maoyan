<template>
    <div id="app">        
        <navbar></navbar>
        <section>
           <router-view></router-view>  
        </section>
        <footerbar></footerbar>

    </div>
</template>

<script>

  import login from "./views/login"

  import navbar from "./components/common/navbar.vue"
  import footerbar from "./components/common/footerbar.vue"

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    navbar,
    footerbar,
  },
}
</script>

<style lang="scss">
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

    li{
      list-style: none;
    }

</style>
