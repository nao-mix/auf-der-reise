<template>
<div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand tag="h1" class="mb-0">AUF DER REISE</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
            <b-link to="/" router-tag="b-nav-item" @click="clickedHome" active>HOME</b-link>
            <b-nav-item-dropdown text="REISEN">
                <b-link to="/cafe" router-tag="b-dropdown-item" @click="clickedmenu">WIENER CAFÉ</b-link>
                <b-dropdown-item href="#" @click="clickedmenu" disabled>EX-JUGOSLAWIEN</b-dropdown-item>
                <b-dropdown-item href="#" @click="clickedmenu" disabled>FLUGHAFEN</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-link to="/spiel" router-tag="b-nav-item" @click="clickedmenu">SPIEL</b-link>
            <b-link to="/myApps" router-tag="b-nav-item" @click="clickedmenu">APP</b-link>
            <b-link to="/ueber" router-tag="b-nav-item" @click="clickedmenu">ÜBER DIESE SEITE</b-link>
            <b-nav-item @click="clickedmenu" disabled>KONTAKT</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!--b-navbar-nav class="ml-auto">
            <b-nav-form right> 
            <b-form-input size="sm" class="mr-sm-2" placeholder="Suchbegriffe"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark" disabled>Suchen</b-button>
            </b-nav-form>
        </b-navbar-nav-->
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Menu',
    methods: {
        clickedHome(){
            this.$emit('homeClick');
        },
        clickedmenu(event){
            //console.log(event);
            this.$emit('menuClick', event);
        }
    }
}
</script>
    
<style scoped>
</style>>
