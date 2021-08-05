<template>
    <div class="detalles2">
        <b-container id= "detalle2">
          <b-row class= "team2">
            <b-col cols="5">
              <div><img :src="require('../assets/' + match.fimg)" width="40%">{{match.fteam}}</div>
            </b-col>
            <b-col cols="2">
              <span>vs</span>
            </b-col>
            <b-col cols="5">
              <div><img :src="require('../assets/' + match.simg)" width="40%">{{match.steam}}</div>
            </b-col>   
          </b-row>
          <b-row class= "local2">
            <div>{{match.address}}</div>
            <div><iframe :src="match.map" width="240" height="170" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
          </b-row>
        </b-container>
    </div> 
</template>
<script>
import {mapState} from "vuex"

export default {
  name: "Detalles2",
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
.detalles2 {
  #detalle2{
    position: relative;
    padding: 2px;
    border: 2px solid var(--primary-color);
    border-radius: 15px;
    margin: 0px;
    .team2{
      font-size: 20px;
      margin: auto;
      justify-content: space-between;
    }
    .local2{
      display: block;
      margin:auto;
      align-content: center;
    }
  }
}
</style>