<script setup lang="js">
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
  import Splash from "./components/Splash.vue";
</script>

<template>
  <div id="frame">
    <Splash/>
    <Navbar/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
  div#frame {
    position: relative;
    min-height: 100vh;
    main {
      margin: 5vh 10vw 0;
      height: auto;
      padding-bottom: 2.5rem;
    }
  }
</style>