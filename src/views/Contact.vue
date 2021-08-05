<template>
  <div class="contact">
    <h4>Contact Us</h4>
    <div class="p">
        <h5>Address</h5>
        <p>Av. Belgrano 2020-CABA</p>
    </div>
    <div class="p">
        <h5>Telephone</h5>
        <p>11-6598-7524</p>
    </div>
    <div class="p">
        <h5>Mail</h5>
        <p> Please email us at <a href="mailto:nysl@chisoccer.org;?subject=Hola%20necesito%20información"> nysl@chisoccer.org </a> </p>
        <p> We will reply to your email as soon as we can</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style lang="scss">
  .contact{
    h4{
    position: relative;
    width: 55vw;
    left:120px;
    top: 20px;
    margin: 5px;
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    background-color: var(--primary-color);
    color:white;
    }
    .p{
    position: relative;
    border: 2px dashed rgba(37, 91, 207, 0.938);
    padding: 5px;
    width: 70%;
    margin: 10px auto;
    top:40px;
    align-items: center;
    & h5{
        text-decoration: underline;
    }
    }
  }
</style>