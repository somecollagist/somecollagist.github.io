<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';

  import me from "@/assets/data/me.toml";

  import MarkdownIt from "markdown-it";
  me.bio.bio = MarkdownIt().render(me.bio.bio);
  me.bio.bio = me.bio.bio.replaceAll("<a ", "<a target=\"_blank\"");
</script>

<template>
  <PageTitle title="About Me"/>
  <PageContent>
    <div id="face-card">
      <img src="../assets/images/face.jpg" />
      <span>
        I'm Johann, a <b>British-New Zealander</b> <b>{{ me.occupation.long }}</b> based in <b>{{ me.life.based_in }}</b>,
        currently <b>{{ me.occupation.activity }}</b> at <b><a :href="me.occupation.link" target="_blank">{{ me.occupation.place }}</a></b>.
      </span>
    </div>
    <br>
    <br>
    <div id="bio" v-html="me.bio.bio">
    </div>
  </PageContent>
</template>

<style lang="scss">
  #face-card {
    display: grid;
    grid: auto / auto 80%;

    >img {
      border-radius: 20%;
      height: 100%;
      width: 100%;
      margin: 0;
    }
    
    >span {
      padding: 1rem;
      font-size: 1.5rem;
      align-content: center;
    }
  }

  @media (max-aspect-ratio: 4/3) {
    #face-card {
      grid: 20% 80% / 25% 50% 25%;
    
      >img {
        grid-row: 1;
        grid-column: 2;
      }
      
      >span {
        grid-row: 2;
        grid-column: 1 / 4;
      }
    }
  }

  #bio {
    font-size: 1.25rem;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    ul {
      list-style: "> ";
      li {
        margin: 0.5rem 0;
      }
    }
  }
</style>