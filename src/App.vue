<template>
  <div id="app">
    <div class= "wraper">
      <img src="../imagen/nysl_logo.png" alt="logo" id="logo">
      <h1>NYSL</h1>
    </div>
    <div id="main">    
      <router-view/>
    </div>
    <Navegador /> 
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Navegador from './components/Navegador.vue'


export default {
  name: 'App',
  components: {
    Navegador,
  },
  methods:{
    ...mapMutations(['listenUser', 'listenResize'])

  },
  beforeMount(){
    this.listenUser()
    this.listenResize()
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  --primary-color: rgba(6, 55, 119, 0.966);
  --secondary-color: #7eff15;
   
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}

.wraper{
  display: flex;
  width: 100vw;
  padding: 10px;
  z-index: 1;
  align-items: center;
 
  #logo{
    height: 20vh;
    margin: 0 0 0 10px;
    z-index: 999;
    @media (orientation:landscape){
      height: 30vh;
      display: inline;
    }
  }
  h1{
    width: 50vw;
    font-size: 50px;
    text-shadow: 3px 3px 8px var(--secondary-color);
    margin: 0;
    @media (orientation:landscape){
      margin: auto 40px;
    }
  }
  
}
#main{
  position: absolute;
  width: 100%;
  min-height: 80vh;
  top: 87px;
  padding-bottom: 100px;
  h2{
    position: relative;
    width: 55vw;
    left:120px;
    top: 20px;
    margin: 5px;
    padding: 12px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color:white;
      @media (orientation:landscape){
      padding: 5px;
      }
    }
}
.border-black{
      border: 2px solid rgba(13, 47, 141, 0.76) !important;
      margin: 5px;
      align-items: center;
    }
.container{
  margin-top:30px;
}
</style>
