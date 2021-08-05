<template>
  <div class="about">
    <h4>About Us</h4>
    <div class="p">
        <h5>Mission</h5>
        <p>To support young athletes living in Chicago's northside neighborhoods, who have an interest in 
        learning and playing soccer, with opportinities to learn and practice skills ralated to the game of
        soccer, specifically those skills around team cooperation and good sportsmanship.</p>
    </div>
    <div class="p">
        <h5>Vision</h5>
        <p>The Northside Youth Soccer League aspires to develop strog, well-rounded, and mindful
        athletes through the building of character, self-discipline, and leaddership.</p>
    </div>
    <div class="p">
        <h5>General Information</h5>
        <p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in 
        Chicago's northside neighborhoods an enviroment in which to learn and play soccer. To be a 
        member of NYSL, you must be between the ages of 4 - 12 and reside un a Chicago northside 
        neighborhood. NYSL is ran by a small full-time staff, and rilies on the generous volunteer
        time of parents and previous league members.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss">
  .about{
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