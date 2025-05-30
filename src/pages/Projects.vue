<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';
  import Project from '@/components/Project.vue';
  import projects from "@/assets/data/projects.toml";
</script>

<template>
  <PageTitle title="Projects"/>
  <PageContent>
    <ul class="projects-list">
      <li v-for="(projectid, index) in Object.keys(projects)">
        <Project
          :id="projectid"
          :name="projectid"
          :repo="projects[projectid].repo"
          :tags="projects[projectid].tags"
          :description_brief="projects[projectid].description_brief"
          :photo="projects[projectid].photo"
          :style="`animation: fadeInUp 0.5s forwards ${0.5 + index/10}s; opacity: 0`"
        />
      </li>
    </ul>
  </PageContent>
</template>

<style lang="scss">
  ul.projects-list {
    list-style: none;
    padding: 0;

    li {
      padding: 1vmin;
    }
  }
</style>