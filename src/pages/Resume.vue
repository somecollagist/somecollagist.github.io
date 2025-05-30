<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';


</script>

<template>
  <PageTitle title="Resumé"/>
  <PageContent style="text-align: center;">
    Interested in learning more about me as a professional? Please have a
    look through my resumé / CV:

    <ul id="cv-list">
      <li>
        <a target="_blank" href="/JohannScott-en_GB.pdf">English 🇬🇧</a>
      </li>
      <li>
        <a target="_blank" href="/JohannScott-de_DE.pdf">Deutsch 🇩🇪</a>
      </li>
    </ul>
  </PageContent>
</template>

<style lang="scss">
  ul#cv-list {
    list-style: none;
    padding: 0;
    margin: 5vmin;

    li {
      margin: 2vmin;
      font-size: 3vmin;
    }
  }
</style>