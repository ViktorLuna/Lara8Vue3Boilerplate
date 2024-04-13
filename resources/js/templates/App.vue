<template>
    <v-app id="app">
        <v-app-bar
        density="compact"
        elevation="0"
        color="#f8f8f8"
        class="pt-2 px-5"
        >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <b class="title">Laravel 8 - Vuejs 3 Boilerplate</b>
            </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    setup() {

    },
}   
</script>

<style>
    
</style>