<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';

  let post_imports = import.meta.glob("/src/assets/data/blog/!(template)*.toml", {import: 'default', eager: true});
  let post_ids = Object.keys(post_imports);
  let posts = Object.values(post_imports);
  for(let x = 0; x < posts.length; x++) {
    posts[x].id = post_ids[x].match(/(?<=.*\/)[^\/]+(?=\.toml$)/)[0];
  }
  posts.sort((a, b) => {
    let year_delta  = b.meta.year  - a.meta.year;
    let month_delta = b.meta.month - a.meta.month;
    let day_delta   = b.meta.day   - a.meta.day;

    if (year_delta != 0) {
      return year_delta;
    }
    if (month_delta != 0) {
      return month_delta;
    }
    return day_delta;
  });
</script>

<template>
  <PageTitle title="Blog"/>
  <PageContent>
    <div id="post-menu">
      <div v-for="(post, index) in posts" :style="`animation: fadeInUp 0.5s forwards ${0.5 + index/10}s; opacity: 0`">
        <div class="post-header">
          <h2 class="post-header-title">
            <router-link :to="`/blog/${post.id}`">{{ post.meta.title }}</router-link>
          </h2>
          <span class="post-header-date">
            {{ post.meta.year }}-{{ post.meta.month.toString().padStart(2, "0") }}-{{ post.meta.day.toString().padStart(2, "0") }}
          </span>
          <span class="post-header-brief">{{ post.post.brief }}</span>
          <div class="post-header-tags">
          [
          <span v-for="tag in post.meta.tags">
            <span v-if="post.meta.tags[post.meta.tags.length-1] != tag">
              {{ tag }},
            </span>
            <span v-else>
              {{ tag }}
            </span>
          </span>
          ]
        </div>
        </div>
        <hr>
      </div>
    </div>
  </PageContent>
</template>

<style lang="scss">
  #post-menu {
    .post-header {
      display: grid;
      grid-template-columns: 80% 20%;
      grid-template-rows: auto auto auto auto;
      margin: 2rem 0;

      .post-header-title {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
        margin: 0;
      }

      .post-header-date {
        grid-row: 1 / 1;
        grid-column: 2 / 2;

        text-align: right;
        margin: auto 0;
      }

      .post-header-brief {
        grid-row: 2 / 2;
        grid-column: 1 / 2;

        margin: 1rem;
      }

      .post-header-tags {
        grid-row: 3 / 3;
        grid-column: 1 / 2;

        margin-left: 1rem;
        font-weight: bold;
      }
    }
  }
</style>