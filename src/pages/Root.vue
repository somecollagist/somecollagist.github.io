<script setup lang="js">
  import me from "@/assets/data/me.toml";

  const dob = new Date(2004, 11, 16); // Javascript is stupid
  let diff = new Date(Date.now() - dob.getTime());
  let age = Math.abs(diff.getUTCFullYear() - 1970);
</script>

<template>
  <div id="title-card">
    <h1>Johann Scott</h1>
    <h2 style="font-weight: 100;">{{ me.occupation.brief }}</h2>
    <hr>
    <h3>Hey there! I'm Johann. 🤟</h3>
    <div style="font-size: 1.5em">
      <p style="font-size: 1.25em; font-style: italic;">
        {{ age }}-year-old <b>{{ me.occupation.long }}</b> at <b>{{ me.occupation.place }}</b>
      </p>
      <p>
        Look around. Maybe you'll <b>find something.</b>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  #title-card {
    margin: 15% 0em;

    text-align: center;
    animation: fadeInUp 0.75s;

    #kumomi-systems {
      font-size: 6vw;
      font-weight: bold;
      white-space: nowrap;
    }

    #tagline {
      font-size: 3vw;
      font-style: italic;
      white-space: nowrap;
    }
  }
</style>