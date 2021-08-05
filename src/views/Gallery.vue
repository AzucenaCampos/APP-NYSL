<template>
  <div class="gallery">
    <h4>Gallery</h4>
    <div class= "p">
      
        <b-row class= "row">
          <b-col class="col">
            <img  thumbnail fluid src="../../imagen/imagen1.jpg" alt="Image 1" width="100%">
          </b-col>
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen2.jpg" alt="Image 2" width="100%">
          </b-col>
        </b-row>
        <b-row class= "row">
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen3.jpg" alt="Image 3" width="100%">
          </b-col>
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen6.jpg" alt="Image 6" width="100%">
          </b-col>
        </b-row>
        <b-row class= "row">
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen10.jpg" alt="Image 10" width="100%">
          </b-col>
        </b-row>
        <b-row class= "row">
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen4.jpg" alt="Image 4" width="100%">
          </b-col >
        </b-row>
        <b-row class= "row">
          <b-col class="col">
            <img thumbnail fluid src="../../imagen/imagen8.jpg" alt="Image 1" width="100%">
          </b-col>
        </b-row>
      
      </div>
  </div>
</template>

<script>
export default {
    name: 'Gallery',
}
</script>

<style lang="scss">
  .gallery{
    h4{
    position: relative;
    width: 55vw;
    left:120px;
    top: 20px;
    margin: 5px;
    padding: 3px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color:white;
    }
    .p{
    position: relative;
    border: 2px dashed rgba(37, 91, 207, 0.938);
    width: 95%;
    margin: 20px 5px;
    top:40px;
    align-content: center;
    .row{
      margin: 10px auto;
      }
    
    }
  }
</style>