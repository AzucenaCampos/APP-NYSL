<template>
    <div class="userInfo">
        <h4>User Info</h4>
        <div class= "info">
            <img :src="user.photoURL" all='photo' id="user-photo">
            <h3>{{user.displayName}}</h3>
        </div>     
    </div>
    

</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'UserInfo',
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style lang="scss">
.userInfo{
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
    .info{
        position: relative;
        top: 60px;
        margin:auto;
      img{
        margin: auto;
        width: 100px;
        border-radius: 50%;
        }
        h3{
            margin: 20px auto;
            width: 60%;
            justify-content: center;
        }   
    }
    
  
  
}


</style>