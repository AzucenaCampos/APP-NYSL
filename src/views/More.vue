<template>
  <div class="more">
    <h2>More Information</h2>
      <router-link to="/about">
      <div> 
          <i class="fas fa-info-circle fa-2x"></i>
          <h4>About us</h4>  
      </div>
      </router-link>
      <router-link to="/locations">
      <div>
        <i class="fas fa-map-marker-alt fa-2x"></i>
        <h4>Locations</h4>
      </div>
      </router-link>
      <router-link to="/gallery">
      <div>
        <i class="far fa-images fa-2x"></i>
       <h4>Gallery</h4>
      </div>
      </router-link>
      <router-link to="/contact">
      <div>
        <i class="fas fa-phone-square-alt fa-2x"></i>
       <h4>Contact</h4>
       </div>
       </router-link>
  </div>
</template>

<script>
export default {
    name: 'More',
}
</script>

<style lang="scss">
  .more{
    h2{
    position: relative;
    width: 55vw;
    left:120px;
    top: 20px;
    margin: 5px;
    padding: 15px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color:white;
    }
    div{
      position: relative;
      display:flex;
      align-items: center;
      margin:10px 20px;
      top:20px;
      left:20px;
      width: 80%;
      height: 70px;
      & i{
      margin:10px 15px;
      color:#265d94;
      }
      & h4{
        margin: 20px;
        text-decoration: none;
      }
    } 
    
  }
</style>