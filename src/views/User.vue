<template>
  
    <div class="user">
      <h2>Username</h2>
      <template v-if="user==null" >
        <div class="login">
          <i class="fas fa-user fa-5x"></i>     
          <button @click="login()">Login with Google</button>
        </div>
      </template>

      <template v-else>
        <div class="login">
        <button>
          <router-link to="user-info">
            My Info
          </router-link>
        </button>
        <button @click="logout()">Logout</button>
        </div>
      </template>
      
    </div>
  
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex';

export default {
    name: 'User', 
    computed:{
      ...mapState(['user'])
    },
    methods:{
      /* ...mapMutations(['changeUserInfo']), */
      login(){
        let provider = new firebase.auth.GoogleAuthProvider()

        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log('logged in' + result.user.mail)
        })
        .catch(error => {
          console.log(error.code)
        })

      },
      logout(){
        firebase
        .auth()
        .signOut()
        .then(() =>{
          console.log('logged out')

        })
        .catch(error => {
          console.log(error.code)
        })
      }
    }
}
</script>


<style lang="scss">
  .user{
    .login{
      position: relative;
      width: 60%;
      top: 50px;
      margin: auto;
      i{
        color: var(--primary-color); 
      }
      button{
      padding: 10px;
      border: 2px solid var(--secondary-color);
      border-radius: 20px;
      font-size: 20px;
      margin: 10px;
      text-decoration: none;
      }
    }
    
    
  }
</style>