<script setup lang="js">
  defineProps({
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  })
</script>

<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
    <span>{{ subtitle }}</span>
    <hr>
  </div>
</template>

<style lang="scss">
  .page-title {
    animation: fadeInUp 0.5s;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    span {
      text-align: end;
      font-style: italic;
      width: 100%;
    }

    hr {
      width: 100%;
    }
  }
</style>