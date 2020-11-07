<template>
<div>
    <b-jumbotron id="jumbo" :style="{ backgroundImage: `url(${makeImgUrl})`}">
        <transition name="fade" appear><p>{{titleName}}</p></transition>
    </b-jumbotron>
</div>
</template>

<script>
export default {
    name: 'MainContainer',
    props: ['titleName', 'imgName', 'showFade'],
    computed: {
        makeImgUrl(){
            const mainImg = require(`../assets/mainImg/${this.imgName}.jpg`);
            return mainImg;
        }
    }
}
</script>

<style scoped>

#jumbo {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    text-align: center;  
    font-size: 4rem;
    padding-top: 200px;
    padding-bottom: 100px;
    margin: 0px;
    color: white;
    height: 500px;
}

.fade-enter {
  transform: translate(0, -100px);
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 2s 0s ease;
}
.fade-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.fade-leave-to {
  transform: translate(0, 100px);
  opacity: 0;
}
.v-leave-active {
  transition: all 1s 0s ease;
}

</style>
