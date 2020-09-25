<template>
<div id="mainCarousel">
    <b-carousel
        id="carousel-fade"
        img-height="600"
        style="text-shadow: 0px 0px 3px #000"
        fade
        indicators >
            <b-carousel-slide
            caption=""
            :img-src="makeHomeImgUrl('home01')"
            ></b-carousel-slide>
            <b-carousel-slide
            caption=""
            :img-src="makeHomeImgUrl('home02')"
            ></b-carousel-slide>
            <b-carousel-slide
            caption=""
            :img-src="makeHomeImgUrl('home03')"
            ></b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
export default {
    name: 'HomeContainer',
    methods: {
        makeHomeImgUrl(pic){
            const mainImg = require(`../assets/mainImg/${pic}.jpg`);
            return mainImg;
        }
    }
}
</script>

<style scoped>
#mainCarousel {
    cursor: pointer;
    transition: all 300ms ease-in;
    filter: grayscale(0) opacity(1);
}
#mainCarousel:hover{
  filter: grayscale(1) opacity(1);
}

</style>