<template>
  <div class="september">
    <h4>Schedule {{selectedMonth}}</h4>
    <template v-if= "!landscape">
      <b-container v-for="(e,index) in monthMatches" v-bind:key="index" class="cuadros " >
        <b-row id="cuadro">
          <b-col class="date" cols="4"> <p>{{e.date}}</p> </b-col>
          <b-col class="teaminfo" cols="8">
            <b-row class= "teams">
              <div>{{e.fteam}}</div>
              <span>vs</span>
              <div>{{e.steam}}</div>
            </b-row>
            <b-row class="info">
                <div>{{e.location}}</div>
                <div>{{e.time}}</div>
            </b-row>
            <b-row class="chat">
                <router-link :to= '"/chat/"+index'>
                  <div><i class="far fa-comments fa-3x"></i></div>
                </router-link>
                <router-link :to= '"/detalles/"+index'>
                  <div><i class="fas fa-info-circle fa-3x"></i></div>
                </router-link>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-else>
      <b-container v-for="(e,index) in monthMatches" v-bind:key="index" class="cuadros " >
        <b-row id="cuadro">
          <b-col cols="6" class="d-flex cuadro1">
            <b-col class="date" cols="4" > <p>{{e.date}}</p> </b-col>
            <b-col class="teaminfo" cols="8">
              <b-row class= "teams">
                <div>{{e.fteam}}</div>
                <span>vs</span>
                <div>{{e.steam}}</div>
              </b-row>
              <b-row class="info">
                  <div>{{e.location}}</div>
                  <div>{{e.time}}</div>
              </b-row>
              <b-row class="chat">
                  <router-link :to= '"/chat/"+index'>
                  <div><i class="far fa-comments fa-3x"></i></div>
                </router-link>
              </b-row>
            </b-col>
          </b-col>   
          <b-col cols="6" class="cuadro1">
            <Detalles2 :order="index"/>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>

import {mapState, mapMutations} from "vuex";
import Detalles2 from "../views/Detalles2.vue";


export default {
  name: "September",
  data(){
    return{   
    }
  },
  components:{
    Detalles2,
    
  },
  computed:{
    ...mapState(["matches", "selectedMonth", "landscape","selectedOrder"]),
    monthMatches() {return this.matches[this.selectedMonth] }

  },
  methods:{
    ...mapMutations(["changeOrder"]),
  }, 
  mounted(){
    /* this.changeSelectedMonth(this.$route.params.month) */
    
  }
};
</script>
<style lang="scss">
.september {
  h4 {
    position: relative;
    width: 55vw;
    left: 120px;
    top: 20px;
    margin: 5px;
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color: white;
  }
  .cuadros{
    position: relative;
    width: 90%;
    height: 200px;
    margin: 15px auto;
    padding: 10px 5px;
    top: 20px;
    background-color: rgb(55, 190, 37);
    border-radius: 20px;
    color:var(--primary-color);
    font: oblique bold 100% cursive;
    @media (orientation:landscape){
      background-color: white;
      height: 280px;
      padding: 5px;
      margin: 15px auto;
      }
    
    #cuadro{
      width: 100%;
      margin: auto;
      @media (orientation:landscape){
      margin: 0px;
      align-items: center;
      }
      .cuadro1{
        padding: 5px;
      }
      .date{
        border: 2px solid white;
        font-size: 25px;
        height: 180px;
        padding: 75px 0;
        @media (orientation:landscape){
        margin: 0;
        font-size: 20px;
        border: 2px solid var(--primary-color) ;
      }
      }
      .teaminfo{
        border: 2px solid white;
        height: 180px;
        padding: 0 10px;
        @media (orientation:landscape){
        border: 2px solid var(--primary-color) ;
        }
        .teams{
          justify-content: space-between;
          margin:5px;
          height: 50px;
          align-content: center;
          font-size: 24px; 
        }
        .info{
          display: block;
          margin:5px;
          height: 50px;
          justify-content: center;
        }
        .chat{
          justify-content: space-between;
          margin: auto;
          height: 50px;
          align-content: center;
          i{
            color: var(--primary-color) ;
            
          } 
        }
      }
    }
  }
}
</style>