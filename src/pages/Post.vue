<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';

  import { useRoute, useRouter } from "vue-router";
  import MarkdownIt from 'markdown-it';

  const route = useRoute();
  let post_imports = import.meta.glob("/src/assets/data/blog/!(template)*.toml", {import: 'default', eager: true});
  let post = post_imports[`/src/assets/data/blog/${route.params.id}.toml`];
  if (post == undefined) {
    useRouter().replace("/404");
  }

  post.meta.date = `${post.meta.year }-${post.meta.month.toString().padStart(2, "0")}-${post.meta.day.toString().padStart(2, "0") }`;
  post.post.banner = post.post.banner.replace(/^images\:/, '/assets/data/blog/images/');
  post.post.content = MarkdownIt().render(post.post.content);
  post.post.content = post.post.content.replaceAll("<a ", "<a target=\"_blank\"");
</script>

<template>
  <PageTitle
    :title="post.meta.title"
    :subtitle="post.meta.date"
  />
  <PageContent id="post">
    <div id="post-banner" v-if="post.post.banner.length != 0">
      <img :src="post.post.banner"/>
    </div>
    <div id="post-brief">
      "{{ post.post.brief }}"
    </div>
    <hr>
    <div id="post-content" v-html="post.post.content">
    </div>
  </PageContent>
</template>

<style lang="scss">
  #post {
    #post-banner>img {
      margin: 0 -10%;
      width: 120%;
      height: 30vmin;
      object-fit: cover;
      mask-image: linear-gradient(
        90deg,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,1) 10%,
        rgba(0,0,0,1) 90%,
        rgba(0,0,0,0) 100%
      );
    }

    #post-brief {
      text-align: center;
      font-style: italic;
      margin: 1rem;
    }

    #post-content {
      margin: 2rem -10% 0;
    }
  }
</style>