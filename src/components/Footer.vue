<script setup lang="js">
  import socials from "@/assets/data/socials/socials.toml";
</script>

<template>
  <footer id="footer">
    <router-link to="/friends">Meet my friends!</router-link>
    <ul id="socials">
      <li v-for="(social, index) in socials">
        <a :href="social.link" target="_blank">
          <img class="social-icon" :src="social.icon" :alt="index" :title="`${social.display} on ${index}`"/>
        </a>
      </li>
    </ul>
    Made with &lt;3 and <a href="https://vuejs.org/" target="_blank">Vue.js</a>
  </footer>
</template>

<style lang="scss">
  footer#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: auto auto 0 auto;
    text-align: center;
    font-size: 0.75rem;
    animation: fadeInUp 0.5s;

    ul#socials {
      list-style: none;
      display: table;
      margin: 0.5rem auto;

      li {
        float: left;
        margin: 0 0.5rem;

        .social-icon {
          width:  1.75rem;
          height: 1.75rem;
          margin: 0.25rem;

          filter: invert(65%) sepia(32%) saturate(3229%) hue-rotate(145deg) brightness(106%) contrast(105%);
        }
      }
    }
  }
</style>