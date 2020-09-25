<template>
<div>
    <MainContainer titleName="SPIEL" imgName="spiel"></MainContainer>

    <div class="jumbotron">
        <h3>Magst du Spiele? Klicke und wähle ein Spiel aus!</h3>
        <br>
        <div v-for="game in showGames" :key="game.id">
            <b-media right-align vertical-align="center" class="mediaList" @click="openGame(game)">
                <template v-slot:aside>
                    <b-img :src="getImgUrl(game.url)" thumbnail width="150" 
                     :alt="game.name" :value="game.name"></b-img>
                </template>
                <h4 class="mt-0 mb-1">{{game.name}}</h4>
                <p class="mb-0" v-html="game.desc"></p>
            </b-media>
        </div>
    </div>
</div>    
</template>

<script>
import MainContainer from './MainContainer.vue';

export default {
    name: 'Spiel',
    components: {
        MainContainer
    },
    methods: {
        getImgUrl(pic) {
            return require(`../assets/spiel/${pic}.jpg`);
        },
        //click the game
        openGame(selectedGame){
            if(selectedGame.id){
                const gameUrl = `http://aufderreise.com/${selectedGame.url}/`
                window.open(gameUrl,'subwin','width=750,height=800');
                return false;
            }
        }
    },
    computed: {
        showGames(){
            const games = [
                {
                    name: 'TETRIS',
                    desc: 'Very popular russian puzzlegame! (Only for desktop)<br>&larr; Move Left<br>&rarr; Move Right<br>&darr; Move Down<br>&uarr; Rotate',
                    url: 'tetris',
                    id: 1
                },
                {
                    name: 'COLOR TIC-TAC-TOE',
                    desc: 'Classic game for 2 players ! <br>Just click!!',
                    url: 'tictactoe',
                    id: 2
                },
                {
                    name: '? ? ?',
                    desc: 'coming soon...',
                    url: 'comingSoon'
                }
            ];
            return games;
        }
    }
}

</script>

<style scoped>

.jumbotron{
    margin: 0px;
}
.mediaList{
    margin-top: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}
.mediaList:hover {
    background-color: #F8F8F8;
}
</style>