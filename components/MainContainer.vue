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
    font-size: 80px;
    padding-top: 200px;
    padding-bottom: 100px;
    margin: 0px;
    color: white;
    height: 600px;
}

.fade-enter-active {
    transition: opacity 4s;
}
.fade-enter {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}

</style>