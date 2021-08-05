<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="blue" fixed="bottom" >
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="../views/Home.vue" to="/"> <i class="fas fa-home"></i> Home</b-nav-item>
          <b-nav-item href="../views/More.vue" to="/more"><i class="fas fa-volleyball-ball"></i> More</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em><i class="fas fa-calendar-alt"></i> Game</em>
            </template>
            <b-dropdown-item @click="changeSelectedMonth('september')" to="/month">Septembre</b-dropdown-item>
            <b-dropdown-item @click="changeSelectedMonth('october')" to="/month">October</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em><i class="far fa-user"></i> User</em>
            </template>
            <b-dropdown-item href="../views/User.vue" to="/user">Profile</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  name: "Navegador",
  
  methods:{
    ...mapMutations(["changeSelectedMonth"]),
  },
};
</script>

<style>
.bg-blue{
  background-color: var(--primary-color) !important;
}
</style>