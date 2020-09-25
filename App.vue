<template>
<div id="app">
    <Menu @menuClick="onMenuClick"></Menu>
    <router-view></router-view>
    <Footer @homeLinkClick="onMenuClick"></Footer>
</div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Menu,
        Footer
  },
  data() {
      return{
      }
  },
  methods: {
      // click Menu item
      onMenuClick(){
          window.scrollTo(0,0);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

div {
    font-family: 'Josefin Sans', sans-serif;
}
</style>
