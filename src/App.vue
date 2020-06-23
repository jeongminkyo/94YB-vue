<template>
  <v-app>
    <app-bar/>
    <picture-background />
    <router-view />
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import PictureBackground from '@/components/PictureBackground'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppBar,
    PictureBackground,
    AppFooter
  }
};
</script>

<style lang="css">
@import './assets/css/main.css'
</style>