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
<<<<<<< HEAD
  import login from "./views/login"
 
=======
  import navbar from "./components/common/navbar.vue"
  import footerbar from "./components/common/footerbar.vue"
>>>>>>> 5a8e53ea4e9b0ee83e1c93362c959df42e53fabf
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
<<<<<<< HEAD
 
 a{
  text-decoration: none;
  color:black;
 }
=======
    li{
      list-style: none;
    }
>>>>>>> 5a8e53ea4e9b0ee83e1c93362c959df42e53fabf
</style>
