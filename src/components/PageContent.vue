<template>
  <div class="page-content">
    <slot/>
  </div>
</template>

<style lang="scss">
  .page-content {
    opacity: 0;
    width: 80%;
    margin: 2.5vmax auto 5vmax;
    animation: fadeInUp 0.5s forwards 0.5s;
  }
</style>