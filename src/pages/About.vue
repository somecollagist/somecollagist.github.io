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
      <h3>
        I'm Johann, a <b>British-New Zealander</b> <b>{{ me.occupation.long }}</b> based in <b>{{ me.life.based_in }}</b>,
        currently <b>{{ me.occupation.activity }}</b> at <b><a :href="me.occupation.link" target="_blank">{{ me.occupation.place }}</a></b>.
      </h3>
    </div>
    <br>
    <br>
    <div id="bio" v-html="me.bio.bio">
    </div>
  </PageContent>
</template>

<style lang="scss">
  #face-card {
		display: flex;
		align-items: center;
		vertical-align: middle;
		justify-content: space-between;
		flex-direction: row;
		max-height: min-content;
    
    >h3 {
      padding: 0 1em;
      margin: 0;
    }
    
    img {
		  border-radius: 20%;
      height: 10vmax;
    }
	}

  #bio {
    font-size: 1.25em;

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.4em;
    }

    ul {
      list-style: ">  ";
      li {
        margin: 1vmin 0;
      }
    }
  }
</style>