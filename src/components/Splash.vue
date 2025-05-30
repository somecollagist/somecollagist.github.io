<script setup lang="js">
  let backdrop = "";
  let unixtime = Number(Date.now()).toString(2);
  for(let x = 0; x < 4096; x++)
    backdrop += unixtime;
</script>

<template>
  <div id="splash" class="monospace">
    {{ backdrop }}
  </div>
</template>

<style lang="scss">
  #splash {
    position: fixed;
    top: 0;
    left: 0;
    max-height: 100%;
    opacity: 5%;
    font-size: large;
    font-weight: bolder;
    text-align: center;
    overflow-wrap: anywhere;
    overflow-y: hidden;
    z-index: -1;

    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>