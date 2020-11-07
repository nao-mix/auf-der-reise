<template>
<div id="app">
    <Loading v-show="loading"></Loading>
    <div v-show="!loading">
        <Menu @menuClick="onMenuClick"></Menu>
        <transition name="mainFade" mode="out-in">
            <router-view></router-view>
        </transition>
        <Footer @homeLinkClick="onMenuClick"></Footer>
    </div>
</div>
</template>

<script>
import Loading from './components/Loading.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Loading,
        Menu,
        Footer
  },
  data() {
      return {
          //show or hide loading animation
          loading: true
      }
  },
  mounted() {
      // after DOM created, loading = false
      setTimeout(() => {
          this.loading = false;
      }, 3000);
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
.mainFade-enter-active, .mainFade-leave-active {
  transition: opacity .8s;
}
.mainFade-enter, .mainFade-leave-to {
  opacity: 0;
}
</style>
