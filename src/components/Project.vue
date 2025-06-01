<script setup>
  defineProps({
    name: {
      type: String
    },
    repo: {
      type: String
    },
    tags: {
      type: Object
    },
    description_brief: {
      type: String
    },
    photo: {
      type: String,
    }
  })
</script>

<template>
  <div class="project">
    <div class="project-photo">
      <img v-if="photo" :src="photo"/>
    </div>
    <div class="project-about">
      <div class="project-label monospace">
        <a class="project-name" :href="`${repo}`" target="_blank">{{ name }}</a>
        <div class="project-tags">
          [
          <span v-for="tag in tags.slice(0,5)">
            <span v-if="tags[tags.slice(0,5).length-1] != tag">
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
      <span class="project-description" v-if="description_brief">
        {{ description_brief }}
      </span>
      <br>
      <br>
    </div>
  </div>
</template>

<style lang="scss">
  .project {
    display: flex;
    flex-direction: row;
    flex: 1;

    .project-photo {
      >img {
        border-radius: 20%;
        height: 10vmax;
      }
    }

    .project-about {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 0 5vmin;

      .project-label {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .project-name {
          font-weight: 900;
          float: left;
          font-size: 2.5vmax;
        }

        .project-tags {
          float: right;
          font-size: 2vmax;
        }
      }

      .project-description {
        font-style: italic;
      }
    }
  }

  @media (max-width: 800px) {
    .project {
      flex-direction: column;

      .project-photo {
        margin: 0 auto;
      }

      .project-about {
        padding: 5vmin 0;
      }
    }
  }
</style>