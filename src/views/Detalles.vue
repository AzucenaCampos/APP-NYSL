<template>
    <div class="detalles">
      <h5>Info Game</h5>
      <template v-if ="!landscape">
        <b-container id= "detalle">
          <b-row class="date">
            <b-col>{{match.date}}</b-col>
          </b-row>
          <b-row class= "team">
            <b-col>
              <div><img :src="require('../assets/' + match.fimg)" width="50%"></div>
              <div>{{match.fteam}}</div>
            </b-col>
            <b-col>
              <span>vs</span>
            </b-col>
            <b-col>
              <div><img :src="require('../assets/' + match.simg)" width="50%"></div>
              <div>{{match.steam}}</div>
            </b-col>   
          </b-row>
          <b-row class= "local">
            <div class= "stadium"><strong>{{match.location}} at {{match.time}}</strong></div>
            <div>{{match.address}}</div>
            <div><iframe :src="match.map" width="250" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
          </b-row>
        </b-container>
      </template>
      <template v-else>
        <b-container id= "detalle">
          <b-row class="date">
            <b-col>{{match.date}}</b-col>
            </b-row>
          <b-row class= "team">
            <b-col>
              <div><img :src="require('../assets/' + match.fimg)" width="20%"></div>
              <div>{{match.fteam}}</div>
            </b-col>
            <b-col>
              <span>vs</span>
            </b-col>
            <b-col>
              <div><img :src="require('../assets/' + match.simg)" width="20%"></div>
              <div>{{match.steam}}</div>
            </b-col> 
          </b-row>
          <b-row class= "local">
            <div class= "stadium"><strong>{{match.location}} at {{match.time}}</strong></div>
            <div>{{match.address}}</div>
            <div><iframe :src="match.map" width="250" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>            
          </b-row>
        </b-container>
      </template>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "Detalles",
  props: ['order'],
  data(){
    return{
      match: null,
    }
  },
  computed:{
    ...mapState(["matches", "selectedMonth", "landscape"]),
    index(){
      return this.$route.params.index || this.order
    }
  },
  created(){
      this.match = this.matches[this.selectedMonth][this.index]
    
  }
}
</script>

<style lang="scss">
.detalles {
  justify-content: center;
  h5 {
    position: relative;
    width: 50vw;
    left: 120px;
    top: 20px;
    margin: 5px;
    padding: 8px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color: white;
    
  }
  #detalle{
    position: relative;
    width: 90%; 
    margin: 15px auto;
    padding: 10px;
    top: 20px;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;
    .date{
      font-size: 20px;
      margin: auto;
    }
    .team{
      padding:0px;
      font-size: 30px;
      margin: auto;
      justify-content: space-between;
    }
    .local{
      display: block;
      margin:auto;
      justify-content: center;
      padding: 10px;
      .stadium{
        font-size: 20px;
        padding: 10px 0;
      }
    }
  }
}
</style>