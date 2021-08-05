<template>
  <div class="home">
    <h2>Upcoming Event</h2>
    <template v-if= "!landscape">
      <div>
        <div id= "div1">
          <h3>August 4</h3>
          <p> NYSL Fundraiser </p>
        </div>
        <div id="div2">
          <h3>August 16</h3>
          <p> Season Kick-off: Meet and Teams </p>
        </div>
        <div id="div3"> 
          <h3>September 1</h3>
          <p> First Game of the Season (Check Game Schedule for Details) </p>
        </div>
      </div>
    </template>
      
    <template v-else>
      <b-container class="container">
        <b-row class="border-black">
          <b-col cols="">
            <img src="../../imagen/imagen7.jpg" width="80%">
          </b-col>
          <b-col cols="">
            <h3>August 4</h3>
            <p><strong> Fundraiser </strong></p>
          </b-col> 
        </b-row>
        <b-row class="border-black">
          <b-col>
            <h3>August 16</h3>
            <p> <strong>Season Kick-off: Meet and Teams</strong> </p>
          </b-col> 
          <b-col>
            <img src="../../imagen/imagen5.jpg" width="80%">
          </b-col>   
        </b-row>
        <b-row class="border-black">
          <b-col>
            <img src="../../imagen/imagen9.jpg" width="80%">
          </b-col>
          <b-col>
            <h3>September 1</h3>
            <p> First Game of the Season (Check Game Schedule for Details) </p>
          </b-col>
        </b-row>
      </b-container>
    </template>
    
         
  </div>
</template>
  


<script>
// @ is an alias to /src
import {mapState} from "vuex"

export default {
  name: 'Home',
  data: function(){
    return{
      
    }
  },
  computed:{
    ...mapState(["landscape"]),
  },
  beforeMount(){
      
    }
}
</script>
<style lang="scss">
  
  .home{
    #div1{
      position: relative;
      background-image: url("../../imagen/imagen7.jpg");
      background-size: cover;
      width: 60%;
      height: 18vh;
      margin:5px;
      top: 20px;
     
    }
    #div2{
      position: relative;
      background-image: url("../../imagen/imagen5.jpg");
      background-size: cover;
      width: 60%;
      height: 18vh;
      margin:5px;
      top: 20px;
      left: 120px; 
    }
    #div3{
      position: relative;
      background-image: url("../../imagen/imagen9.jpg");
      background-size: cover;
      width: 60%;
      height: 18vh;
      margin:5px;
      top: 20px;
    }
    h3{
    color: black;
    font-family: Comic Sans MS, Comic Sans, cursive ;
    text-shadow: 3px 3px 8px rgb(52, 188, 212);
    }
    p{
      text-shadow: 3px 3px 8px rgb(52, 188, 212);
      color: rgb(0, 0, 0);
    }
    
  }
</style>