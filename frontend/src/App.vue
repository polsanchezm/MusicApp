<script setup lang="ts">
import Home from './components/HomeComponent.vue'
import LeftSidebar from './components/LeftSidebarComponent.vue'
import RightSidebar from './components/RightSidebarComponent.vue'
// import BottomMusicPlayer from './components/BottomPlayerComponent.vue'
import './assets/styles/index.css'
import './assets/styles/App.css'
</script>

<template>
  <section id="app-layout">
    <section id="main-box">
      <aside id="left-sidebox">
        <LeftSidebar />
      </aside>
      <section id="home-box">
        <Home />
      </section>
      <aside id="right-sidebox">
        <RightSidebar />
      </aside>
    </section>
    <!-- <footer>
      <BottomMusicPlayer />
    </footer> -->
  </section>
</template>

<style scoped></style>
