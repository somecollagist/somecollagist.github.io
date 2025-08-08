<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';

  import friends from "@/assets/data/friends.toml";
  import Friend from '@/components/Friend.vue';
</script>

<template>
  <PageTitle title="Friends"/>
  <PageContent>
    <ul class="friend-list">
      <li v-for="(friendid, index) in Object.keys(friends)">
        <Friend
          :name="friends[friendid].name"
          :photo="friends[friendid].photo"
          :description="friends[friendid].description"
          :website="friends[friendid].website"
          :linkedin="friends[friendid].linkedin"
          :github="friends[friendid].github"
          :style="`animation: fadeInUp 0.5s forwards ${0.5 + index/10}s; opacity: 0`"
        />
      </li>
    </ul>
  </PageContent>
</template>

<style lang="scss">
  ul.friend-list {
    list-style: none;
    padding: 0;

    li {
      padding: 1rem 0;
    }
  }
</style>