<template>
<div>
    <HomeContainer></HomeContainer>

    <b-jumbotron id="mainJumbo">
        <h2>Willkommen bei "AUF DER REISE" !</h2>
        <p>now under construction... </p>
    </b-jumbotron>
</div>
</template>

<script>
import HomeContainer from './HomeContainer.vue';

export default {
    name: 'Home',    
    components: {
        HomeContainer
    }
}
</script>

<style scoped>
    #mainJumbo {
        margin: 0px;
        color: #003366;
    }
</style>