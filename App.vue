<template>
<div id="app">
    <Menu @menuClick="onMenuClick" @homeClick="onHomeClick"></Menu>
    <router-view></router-view>
    <Footer @homeLinkClick="onHomeClick"></Footer>
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
  data(){
      return{
      }
  },
  methods: {
      // click "Home"
      onHomeClick(){
          window.scrollTo(0,0);
      },
      // click other menu
      onMenuClick(){
          //let myLink = e.target.pathname.replace(/\//g, '');
          //console.log(e);
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
