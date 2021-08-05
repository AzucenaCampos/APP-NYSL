<template>
  <div class="chat">
    <h5>Chat</h5>
    <template v-if="user==null">
      <div id="login">
        <div class="text">
          <p>You have to login to use the chat </p>
        </div>
        <router-link to="/user" tag="button">
        Login
        </router-link>
      </div>
    </template>
    <template v-else>
      <div id="body">
        <div v-for="(message, index) in messages" :key="index" class="bubble">
          <p><strong>{{message.author}} said: </strong></p>
          <p>{{message.body}}</p>
        </div>
        <form @submit.prevent="post()">
          <input type="text" placeholder="Enter your message..." id="enter" v-model="input" />
          <button type="submit">Send</button>
        </form>
      </div>
   </template>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {db} from "../firebase/db"

export default {
  name: "Chat",
  props: ['order'],
  data(){
    return{
      match: null,
      messages: [],
      input:null,
    }
  },
  methods:{
    post: function(){
      let folder = db.ref("forum/match" + this.$route.params.id)
      
      let message = {
        body: this.input,
        author: this.user.displayName,
        date: new Date()
      }
      folder.push(message)
      this.input=null
    }
  },
  computed:{
    ...mapState(["matches", "selectedMonth", "landscape","user"]),
    index(){
      return this.$route.params.index || this.order
    }
  },
  created(){
      this.match = this.matches[this.selectedMonth][this.index]  
  },
  mounted(){
   this.messages = [];
   db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot) =>{
     this.messages.push(snapshot.val())
   })
  }
}
</script>

<style lang="scss">
  .chat{
    h5 {
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
    #login{
      position: relative;
      top: 50px;
      .text{
        border: 2px solid var(--secondary-color);
        border-radius: 20px;
        font-size: 30px;
        width: 70%;
        margin: 10px auto;
      }
    }
    #body{
      position: relative;
      top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>